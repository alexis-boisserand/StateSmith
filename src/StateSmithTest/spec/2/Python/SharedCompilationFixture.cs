#nullable enable

using StateSmith.Output.UserConfig;
using StateSmith.Runner;
using StateSmith.SmGraph;
using StateSmithTest.Processes;

namespace Spec.Spec2.Python;

/// <summary>
/// Required so that we only do the dotnet compilation once to avoid concurrency conflicts.
/// This will only be constructed once and shared amongst any tests that need it.
/// </summary>
public class SharedCompilationFixture
{
    public static string OutputDirectory => Spec2Fixture.Spec2Directory + "../../../test-misc/python-spec2/";

    public SharedCompilationFixture()
    {
        var action = (SmRunner runner) =>
        {
            runner.Settings.transpilerId = TranspilerId.Python;
            runner.AlgoOrTranspilerUpdated();
            runner.Settings.outputGilCodeAlways = true;

            // NOTE!!! This runs before any other transformations so we can be confident that the code we are modifying is in the original form
            // from the diagram and not something that was added by a transformation (like history vertices).
            runner.SmTransformer.transformationPipeline.Insert(0, new TransformationStep(action: (sm) => {
                sm.VisitRecursively((node) =>
                {
                    foreach (var behavior in node.Behaviors)
                    {
                        behavior.actionCode = behavior.actionCode.Replace(";", "");
                        behavior.actionCode = behavior.actionCode.Replace("++", " += 1");
                        behavior.actionCode = behavior.actionCode.Replace("/*", "#");
                        behavior.actionCode = behavior.actionCode.Replace("MainClass.", "Printer.");
                        behavior.actionCode = behavior.actionCode.Replace("true", "True");
                        behavior.actionCode = behavior.actionCode.Replace("false", "False");
                    }
                });
            }));

            //// 
            //runner.SmTransformer.InsertAfterFirstMatch(SpecFixture.TracingModderId,
            //    new TransformationStep(action: (sm) => {
            //        sm.VisitRecursively((node) =>
            //        {
            //            foreach (var behavior in node.Behaviors)
            //            {
            //                behavior.guardCode = behavior.guardCode.Replace("\", true", "\", True");
            //            }
            //        });
            //    }));
        };

        Spec2Fixture.CompileAndRun(new MyGlueFile(), OutputDirectory, action: action, semiColon: "", trueString: "True");

        SimpleProcess process;

        process = new()
        {
            WorkingDirectory = OutputDirectory,
            ProgramPath = "python",
            Args = " -m compileall ."   // https://stackoverflow.com/questions/5607283/how-can-i-manually-generate-a-pyc-file-from-a-py-file
        };
        process.Run(timeoutMs: SimpleProcess.DefaultLongTimeoutMs);
    }

    public class MyGlueFile : IRenderConfigPython
    {
        string IRenderConfig.FileTop => @"
            # any text you put in IRenderConfig.FileTop (like this comment) will be written to the generated file
            ";

        string IRenderConfig.VariableDeclarations => @"
            self.count = 0
            ";

        string IRenderConfig.AutoExpandedVars => @"
            self.auto_var_1 = 0
            ";

        string IRenderConfigPython.Extends => "Spec2SmBase";

        string IRenderConfigPython.Imports => @"
            from Spec2SmBase import Spec2SmBase
            from Printer import Printer
            ";

        public class Expansions : Spec2GenericVarExpansions
        {
            public override string trace(string message) => $"Printer.trace({message})"; // this isn't actually needed, but helps ensure expansions are working
            public override string trace_guard(string message, string guardCode) => $"self.trace_guard({message}, {guardCode})";
        }
    }
}



