using StateSmith.Output;
using StateSmith.Output.Algos.Balanced1;
using StateSmith.Output.Algos.Balanced2;
using StateSmith.Output.Gil.C99;
using StateSmith.Output.Gil.CSharp;
using StateSmith.Output.Gil.JavaScript;
using StateSmith.Output.UserConfig;

#nullable enable

namespace StateSmith.Runner;

/// <summary>
/// Used to load different settings depending on algorithm and target language selected.
/// </summary>
public class AlgoTranspilerCustomizer
{
    public void Customize(DiServiceProvider sp, AlgorithmId algorithmId, TranspilerId transpilerId, AlgoBalanced1Settings algoBalanced1Settings)
    {
        switch (algorithmId)
        {
            case AlgorithmId.Balanced1:
                break;

            case AlgorithmId.Default:
            case AlgorithmId.Balanced2:
                sp.AddSingletonT<EventHandlerBuilder, EventHandlerBuilder2>();
                sp.AddSingletonT<IGilAlgo, AlgoBalanced2>();
                break;

            default: throw new System.ArgumentException("Unknown algorithmId: " + algorithmId);
        }

        switch (transpilerId)
        {
            case TranspilerId.Default:
            case TranspilerId.C99:
                {
                    sp.AddSingletonT<IGilTranspiler, GilToC99>();
                    sp.AddSingletonT<IExpansionVarsPathProvider, CExpansionVarsPathProvider>();
                }
                break;

            case TranspilerId.CSharp:
                {
                    sp.AddSingletonT<IGilTranspiler, GilToCSharp>();
                    sp.AddSingletonT<IExpansionVarsPathProvider, CSharpExpansionVarsPathProvider>();
                    sp.AddSingletonT<NameMangler, PascalFuncCamelVarNameMangler>();
                    algoBalanced1Settings.skipClassIndentation = false;
                }
                break;

            case TranspilerId.JavaScript:
                {
                    sp.AddSingletonT<IGilTranspiler, GilToJavaScript>();
                    sp.AddSingletonT<IExpansionVarsPathProvider, CSharpExpansionVarsPathProvider>();    // todo - rename to something common
                    sp.AddSingletonT<NameMangler, CamelCaseNameMangler>();
                    sp.AddSingletonT<IAutoVarsParser, JsAutoVarsParser>();
                    algoBalanced1Settings.skipClassIndentation = false;
                }
                break;
        }
    }

}


