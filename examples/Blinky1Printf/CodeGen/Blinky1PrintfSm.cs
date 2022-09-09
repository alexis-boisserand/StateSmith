﻿using StateSmith.Input.Expansions;
using StateSmith.output;
using StateSmith.output.C99BalancedCoder1;
using StateSmith.output.UserConfig;
using StateSmith.Runner;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blinky1
{   
    public class Blinky1PrintfSm
    {
        public static void GenFile()
        {
            var directory = AppDomain.CurrentDomain.BaseDirectory + "../../../../src/";
            var diagramFile = directory + nameof(Blinky1PrintfSm)+ ".graphml";

            MyGlueFile myGlueFile = new();
            RunnerSettings settings = new(myGlueFile, diagramFile: diagramFile, outputDirectory: directory);
            settings.mangler = new MyMangler();

            SmRunner runner = new(settings);

            runner.Run();
        }


        /// <summary>
        /// This class 
        /// </summary>
        public class MyGlueFile : IRenderConfigC
        {
            string IRenderConfigC.HFileIncludes => StringUtils.DeIndentTrim(@"
                #include <stdint.h>  // this ends up in the generated .h file
            ");

            string IRenderConfigC.CFileIncludes => StringUtils.DeIndentTrim(@"
                // this ends up in the generated c file
                #include ""app_timer.h""
                #include ""led.h""
            ");

            string IRenderConfigC.VariableDeclarations => StringUtils.DeIndentTrim(@"
                uint32_t timer_started_at_ms;  // milliseconds
            ");


            /// <summary>
            /// This class creates expansions. It is instantiated using reflection.
            /// </summary>
            public class Expansions : UserExpansionScriptBase
            {
                #pragma warning disable IDE1006 // Naming Styles

                public string time_ms => "app_timer_get_ms()";

                // this expansion allows you to access the user defined variable `timer_started_at_ms`
                public string timer_started_at_ms => AutoVarName();

                // sets timer variable with current time
                public string reset_timer() => $"{timer_started_at_ms} = {time_ms}";

                // calculates the elapsed number of milliseconds
                // unsigned math handles ms wrap around
                public string elapsed_ms => $"({time_ms} - {timer_started_at_ms})";

                // creates a true condition 
                public string after_ms(string ms) => $"( {elapsed_ms} >= {ms} )";


                public string turn_led_off() => $"led_turn_off();";
                public string turn_led_on() => $"led_turn_on();";

                #pragma warning restore IDE1006 // Naming Styles
            }
        }


        /// <summary>
        /// This class mangles names. If you would like to customize the generated code names,
        /// here is where you do it. Override the relevant method.
        /// </summary>
        class MyMangler : CNameMangler
        {
        }
    }
}
