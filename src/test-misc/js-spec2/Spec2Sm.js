"use strict";    
// any text you put in IRenderConfig.FileTop (like this comment) will be written to the generated .h file
import { trace, trace_guard } from "./printer.js";
// Generated state machine
export class Spec2Sm
{
// trace() implemented in base class
trace_guard(msg, condition) {
    console.log(msg);
    return condition;
}
    static EventId = 
    {
        DO : 0, // The `do` event is special. State event handlers do not consume this event (ancestors all get it too) unless a transition occurs.
        EV1 : 1,
        EV10 : 2,
        EV2 : 3,
        EV3 : 4,
        EV4 : 5,
        EV5 : 6,
        EV6 : 7,
        EV7 : 8,
        EV8 : 9,
        EV9 : 10,
        EVBACK : 11,
        EVCLOSE : 12,
        EVOPEN : 13,
        EVSTEP : 14,
    }
    static { Object.freeze(this.EventId); }
    
    static EventIdCount = 15;
    static { Object.freeze(this.EventIdCount); }
    
    static StateId = 
    {
        ROOT : 0,
        DECIDE : 1,
        PREFIXING : 2,
        PREFIXING__ORDER_MENU : 3,
        PREFIXING__OM__BEVERAGE : 4,
        PREFIXING__OM__BEV__NONE : 5,
        PREFIXING__OM__BEV__TEA : 6,
        PREFIXING__OM__BEV__WATER : 7,
        PREFIXING__OM__VEG : 8,
        PREFIXING__OM__VEG__NONE : 9,
        PREFIXING__OM__VEG__POTATO : 10,
        PREFIXING__OM__VEG__YAM : 11,
        PREFIXING__SHOWS_MANUAL_PREFIX : 12,
        PREFIXING__SHOWS_MANUAL_PREFIX__ORDER_MENU : 13,
        PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE : 14,
        PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE : 15,
        PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_TEA : 16,
        PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER : 17,
        PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG : 18,
        PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE : 19,
        PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO : 20,
        PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_YAM : 21,
        TEST1_DO_EVENT_TESTING : 22,
        TEST1_ROOT : 23,
        TEST1_S1 : 24,
        TEST1_S1_1 : 25,
        TEST1_S2 : 26,
        TEST10_CHOICE_POINT : 27,
        TEST10_A : 28,
        TEST10_A_1 : 29,
        TEST10_ROOT : 30,
        TEST10_G : 31,
        TEST10_G_S0 : 32,
        TEST10_G_S1 : 33,
        TEST10_G_S2 : 34,
        TEST10_G_S3 : 35,
        TEST10_S1 : 36,
        TEST10_S4 : 37,
        TEST2_REGULAR_EVENT_TESTING : 38,
        TEST2_ROOT : 39,
        TEST2_S1 : 40,
        TEST2_S1_1 : 41,
        TEST2_S2 : 42,
        TEST3_BEHAVIOR_ORDERING : 43,
        TEST3_ROOT : 44,
        TEST3_S1 : 45,
        TEST3_S2 : 46,
        TEST3_S3 : 47,
        TEST4_PARENT_CHILD_TRANSITIONS : 48,
        TEST4_B_AND_OTHERS : 49,
        TEST4B_LOCAL : 50,
        TEST4B_G : 51,
        TEST4B_G_1 : 52,
        TEST4C_LOCAL_TO_ALIAS : 53,
        TEST4C_G : 54,
        TEST4C_G_1 : 55,
        TEST4D_EXTERNAL : 56,
        TEST4D_G : 57,
        TEST4D_G_1 : 58,
        TEST4_DECIDE : 59,
        TEST4_ROOT : 60,
        TEST4_S1 : 61,
        TEST4_S10 : 62,
        TEST4_S10_1 : 63,
        TEST4_S2 : 64,
        TEST4_S20 : 65,
        TEST4_S20_1 : 66,
        TEST4_S3 : 67,
        TEST5_PARENT_CHILD_TRANSITIONS_ALIAS : 68,
        TEST5_ROOT : 69,
        TEST5_S1 : 70,
        TEST5_S2 : 71,
        TEST5_S3 : 72,
        TEST6_VARIABLES : 73,
        TEST6_ROOT : 74,
        TEST6_ROOT__AUTO_VAR_TEST : 75,
        TEST6_ROOT__AUTO_VAR_TEST__S1 : 76,
        TEST6_ROOT__AUTO_VAR_TEST__S2 : 77,
        TEST6_ROOT__DECIDE : 78,
        TEST6_ROOT__NORMAL : 79,
        TEST6_ROOT__NORMAL__S1 : 80,
        TEST6_ROOT__NORMAL__S2 : 81,
        TEST7_INITIAL_OR_HISTORY : 82,
        TEST7 : 83,
        T7__DEEP_HISTORY1 : 84,
        T7__DH1__SANTAS_WORKSHOP : 85,
        T7__DH1__ALIENS_DETECTED : 86,
        T7__DH1__GET_BACKUP : 87,
        T7__DH1__HERO : 88,
        T7__DH1__CALL_BATMAN : 89,
        T7__DH1__CALL_THOR : 90,
        T7__DH1__LOCAL_HELP : 91,
        T7__DH1__BUDDY_ELF : 92,
        T7__DH1__POLAR_BEARS : 93,
        T7__DH1__GIVE_COOKIES : 94,
        T7__DH1__SNOWBALL_FIGHT : 95,
        T7__DH1__BUILD : 96,
        T7__DH1__TOOL : 97,
        T7__DH1__CIRCULAR_SAW : 98,
        T7__DH1__IMPACT_DRILL : 99,
        T7__DH1__TOY : 100,
        T7__DH1__GLOW_WORM : 101,
        T7__DH1__RACE_CAR : 102,
        T7__DH1__ROBOT : 103,
        T7__DH1__BATTLEBOT : 104,
        T7__DH1__WALL_E : 105,
        T7__DH1__TEDDY_BEAR : 106,
        T7__DEEP_HISTORY2 : 107,
        T7__DH2__STATE_0 : 108,
        T7__DH2__STATE_1 : 109,
        T7__DH2__STATE_2 : 110,
        T7__DH2__STATE_6 : 111,
        T7__DH2__STATE_9 : 112,
        T7__DH2__STATE_3 : 113,
        T7__DEEP_HISTORY3 : 114,
        T7__DH3__STATE_0 : 115,
        T7__DH3__STATE_1 : 116,
        T7__DH3__STATE_2 : 117,
        T7__DH3__STATE_6 : 118,
        T7__DH3__STATE_9 : 119,
        T7__DH3__STATE_3 : 120,
        T7__HISTORY1 : 121,
        T7__H1__OFF : 122,
        T7__H1__OFF1 : 123,
        T7__H1__OFF2 : 124,
        T7__H1__OFF3 : 125,
        T7__H1__ON : 126,
        T7__H1__ON1 : 127,
        T7__H1__ON2 : 128,
        T7__H1__ON3 : 129,
        T7__INITIAL1 : 130,
        T7__INITIAL1__PARENT : 131,
        T7__INITIAL1__G : 132,
        T7__INITIAL1__G_S1 : 133,
        T7__INITIAL1__G_S2 : 134,
        T7__INITIAL1__G_S3 : 135,
        T7__INITIAL1__S1 : 136,
        TEST7_DECIDE : 137,
        TEST8_ENTRY_CHOICE : 138,
        TEST8_ROOT : 139,
        TEST8_G : 140,
        TEST8_G_S1 : 141,
        TEST8_G_S2 : 142,
        TEST8_G_S3 : 143,
        TEST8_S1 : 144,
        TEST9_EXIT_CHOICE : 145,
        TEST9_DECIDE : 146,
        TEST9_ROOT : 147,
        TEST9_G_S1 : 148,
        TEST9_G_S2 : 149,
        TEST9_G_S3 : 150,
        TEST9_G_S4 : 151,
        TEST9_S1 : 152,
        TEST9_S1_1 : 153,
        TEST9A_ROOT : 154,
        TEST9A_S1 : 155,
        TEST9A_S1_1 : 156,
        TEST9B_ROOT : 157,
        TEST9B_ROOT__A1 : 158,
        TEST9B_ROOT__A2 : 159,
        TEST9B_ROOT__A3 : 160,
        TEST9B_ROOT__A4 : 161,
        TEST9B_ROOT__B1 : 162,
        TEST9B_ROOT__B2 : 163,
        TEST9B_ROOT__B3 : 164,
        TEST9B_ROOT__B4 : 165,
    }
    static { Object.freeze(this.StateId); }
    
    static StateIdCount = 166;
    static { Object.freeze(this.StateIdCount); }
    
    static T7__H1__ON_HistoryId = 
    {
        T7__H1__ON1 : 0, // default transition
        T7__H1__ON2 : 1,
        T7__H1__ON3 : 2,
    }
    static { Object.freeze(this.T7__H1__ON_HistoryId); }

    
    static T7__H1__OFF_HistoryId = 
    {
        T7__H1__OFF1 : 0, // default transition
        T7__H1__OFF2 : 1,
        T7__H1__OFF3 : 2,
    }
    static { Object.freeze(this.T7__H1__OFF_HistoryId); }

    
    static T7__DH1__ALIENS_DETECTED_HistoryId = 
    {
        T7__DH1__SNOWBALL_FIGHT : 0, // default transition
        T7__DH1__GIVE_COOKIES : 1,
        T7__DH1__HERO : 2,
        T7__DH1__BUDDY_ELF : 3,
        T7__DH1__POLAR_BEARS : 4,
    }
    static { Object.freeze(this.T7__DH1__ALIENS_DETECTED_HistoryId); }

    
    static T7__DH1__GET_BACKUP_HistoryId = 
    {
        T7__DH1__GET_BACKUPChoicePoint : 0, // default transition
        T7__DH1__HERO : 1,
        T7__DH1__BUDDY_ELF : 2,
        T7__DH1__POLAR_BEARS : 3,
    }
    static { Object.freeze(this.T7__DH1__GET_BACKUP_HistoryId); }

    
    static T7__DH1__BUILD_HistoryId = 
    {
        T7__DH1__TOY : 0, // default transition
        T7__DH1__TOOL : 1,
        T7__DH1__RACE_CAR : 2,
        T7__DH1__TEDDY_BEAR : 3,
        T7__DH1__GLOW_WORM : 4,
        T7__DH1__ROBOT : 5,
        T7__DH1__BATTLEBOT : 6,
        T7__DH1__WALL_E : 7,
        T7__DH1__IMPACT_DRILL : 8,
        T7__DH1__CIRCULAR_SAW : 9,
    }
    static { Object.freeze(this.T7__DH1__BUILD_HistoryId); }

    
    static T7__DH2__state_0_HistoryId = 
    {
        T7__DH2__state_1 : 0, // default transition
        T7__DH2__state_2 : 1,
        T7__DH2__state_6 : 2,
        T7__DH2__state_9 : 3,
    }
    static { Object.freeze(this.T7__DH2__state_0_HistoryId); }

    
    static T7__DH3__state_0_HistoryId = 
    {
        T7__DH3__state_1 : 0, // default transition
        T7__DH3__state_2 : 1,
    }
    static { Object.freeze(this.T7__DH3__state_0_HistoryId); }
    
    // Used internally by state machine. Feel free to inspect, but don't modify.
    stateId;
    
    // Used internally by state machine. Don't modify.
    _ancestorEventHandler;
    
    // Used internally by state machine. Don't modify.
    _currentEventHandlers = Array(Spec2Sm.EventIdCount).fill(undefined);
    
    // Used internally by state machine. Don't modify.
    _currentStateExitHandler;
    
    // Variables. Can be used for inputs, outputs, user variables...
    vars = {
        T7__H1__ON_history: undefined,
        T7__H1__OFF_history: undefined,
        T7__DH1__ALIENS_DETECTED_history: undefined,
        T7__DH1__GET_BACKUP_history: undefined,
        T7__DH1__BUILD_history: undefined,
        T7__DH2__state_0_history: undefined,
        T7__DH3__state_0_history: undefined,
        count: 0,
        auto_var_1: 0,
    };
    
    // Starts the state machine. Must be called before dispatching events. Not thread safe.
    Start()
    {
        this._ROOT_enter();
        // ROOT behavior
        // uml: TransitionTo(ROOT.InitialState)
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `ROOT.InitialState`.
            // ROOT.InitialState is a pseudo state and cannot have an `enter` trigger.
            
            // ROOT.InitialState behavior
            // uml: / { trace("Transition action `` for ROOT.InitialState to DECIDE."); } TransitionTo(DECIDE)
            {
                // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for ROOT.InitialState to DECIDE.");`.
                console.log("Transition action `` for ROOT.InitialState to DECIDE.");
                
                // Step 3: Enter/move towards transition target `DECIDE`.
                this._DECIDE_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.DECIDE;
                // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                return;
            } // end of behavior for ROOT.InitialState
        } // end of behavior for ROOT
    }
    
    // Dispatches an event to the state machine. Not thread safe.
    DispatchEvent(/** @type {Spec2Sm.EventId} */ eventId)
    {
        let behaviorFunc = this._currentEventHandlers[eventId];
        
        while (behaviorFunc != null)
        {
            this._ancestorEventHandler = null;
            behaviorFunc.call(this);
            behaviorFunc = this._ancestorEventHandler;
        }
    }
    
    // This function is used when StateSmith doesn't know what the active leaf state is at
    // compile time due to sub states or when multiple states need to be exited.
    _ExitUpToStateHandler(/** @type {Spec2Sm.Func} */ desiredStateExitHandler)
    {
        while (this._currentStateExitHandler != desiredStateExitHandler)
        {
            this._currentStateExitHandler.call(this);
        }
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state ROOT
    ////////////////////////////////////////////////////////////////////////////////
    
    _ROOT_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._ROOT_exit;
        
        // ROOT behavior
        // uml: enter / { trace("Enter Spec2Sm."); }
        {
            // Step 1: execute action `trace("Enter Spec2Sm.");`
            console.log("Enter Spec2Sm.");
        } // end of behavior for ROOT
    }
    
    _ROOT_exit()
    {
        // ROOT behavior
        // uml: exit / { trace("Exit Spec2Sm."); }
        {
            // Step 1: execute action `trace("Exit Spec2Sm.");`
            console.log("Exit Spec2Sm.");
        } // end of behavior for ROOT
;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state DECIDE
    ////////////////////////////////////////////////////////////////////////////////
    
    _DECIDE_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._DECIDE_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._DECIDE_ev1;
        this._currentEventHandlers[Spec2Sm.EventId.EV10] = this._DECIDE_ev10;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = this._DECIDE_ev2;
        this._currentEventHandlers[Spec2Sm.EventId.EV3] = this._DECIDE_ev3;
        this._currentEventHandlers[Spec2Sm.EventId.EV4] = this._DECIDE_ev4;
        this._currentEventHandlers[Spec2Sm.EventId.EV5] = this._DECIDE_ev5;
        this._currentEventHandlers[Spec2Sm.EventId.EV6] = this._DECIDE_ev6;
        this._currentEventHandlers[Spec2Sm.EventId.EV7] = this._DECIDE_ev7;
        this._currentEventHandlers[Spec2Sm.EventId.EV8] = this._DECIDE_ev8;
        this._currentEventHandlers[Spec2Sm.EventId.EV9] = this._DECIDE_ev9;
        
        // DECIDE behavior
        // uml: enter / { trace("Enter DECIDE."); }
        {
            // Step 1: execute action `trace("Enter DECIDE.");`
            console.log("Enter DECIDE.");
        } // end of behavior for DECIDE
    }
    
    _DECIDE_exit()
    {
        // DECIDE behavior
        // uml: exit / { trace("Exit DECIDE."); }
        {
            // Step 1: execute action `trace("Exit DECIDE.");`
            console.log("Exit DECIDE.");
        } // end of behavior for DECIDE
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._ROOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV10] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV3] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV4] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV5] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV6] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV7] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV8] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV9] = null;  // no ancestor listens to this event
    }
    
    _DECIDE_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // DECIDE behavior
        // uml: EV1 [trace_guard("State DECIDE: check behavior `EV1 TransitionTo(TEST1_DO_EVENT_TESTING)`.", true)] / { trace("Transition action `` for DECIDE to TEST1_DO_EVENT_TESTING."); } TransitionTo(TEST1_DO_EVENT_TESTING)
        if (trace_guard("State DECIDE: check behavior `EV1 TransitionTo(TEST1_DO_EVENT_TESTING)`.", true))
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            this._DECIDE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for DECIDE to TEST1_DO_EVENT_TESTING.");`.
            console.log("Transition action `` for DECIDE to TEST1_DO_EVENT_TESTING.");
            
            // Step 3: Enter/move towards transition target `TEST1_DO_EVENT_TESTING`.
            this._TEST1_DO_EVENT_TESTING_enter();
            
            // TEST1_DO_EVENT_TESTING.InitialState behavior
            // uml: / { trace("Transition action `` for TEST1_DO_EVENT_TESTING.InitialState to TEST1_ROOT."); } TransitionTo(TEST1_ROOT)
            {
                // Step 1: Exit states until we reach `TEST1_DO_EVENT_TESTING` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for TEST1_DO_EVENT_TESTING.InitialState to TEST1_ROOT.");`.
                console.log("Transition action `` for TEST1_DO_EVENT_TESTING.InitialState to TEST1_ROOT.");
                
                // Step 3: Enter/move towards transition target `TEST1_ROOT`.
                this._TEST1_ROOT_enter();
                
                // TEST1_ROOT.InitialState behavior
                // uml: / { trace("Transition action `` for TEST1_ROOT.InitialState to TEST1_S1_1."); } TransitionTo(TEST1_S1_1)
                {
                    // Step 1: Exit states until we reach `TEST1_ROOT` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                    
                    // Step 2: Transition action: `trace("Transition action `` for TEST1_ROOT.InitialState to TEST1_S1_1.");`.
                    console.log("Transition action `` for TEST1_ROOT.InitialState to TEST1_S1_1.");
                    
                    // Step 3: Enter/move towards transition target `TEST1_S1_1`.
                    this._TEST1_S1_enter();
                    this._TEST1_S1_1_enter();
                    
                    // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                    this.stateId = Spec2Sm.StateId.TEST1_S1_1;
                    // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                    return;
                } // end of behavior for TEST1_ROOT.InitialState
            } // end of behavior for TEST1_DO_EVENT_TESTING.InitialState
        } // end of behavior for DECIDE
    }
    
    _DECIDE_ev10()
    {
        // No ancestor state handles `ev10` event.
        
        // DECIDE behavior
        // uml: EV10 [trace_guard("State DECIDE: check behavior `EV10 TransitionTo(TEST10_CHOICE_POINT)`.", true)] / { trace("Transition action `` for DECIDE to TEST10_CHOICE_POINT."); } TransitionTo(TEST10_CHOICE_POINT)
        if (trace_guard("State DECIDE: check behavior `EV10 TransitionTo(TEST10_CHOICE_POINT)`.", true))
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            this._DECIDE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for DECIDE to TEST10_CHOICE_POINT.");`.
            console.log("Transition action `` for DECIDE to TEST10_CHOICE_POINT.");
            
            // Step 3: Enter/move towards transition target `TEST10_CHOICE_POINT`.
            this._TEST10_CHOICE_POINT_enter();
            
            // TEST10_CHOICE_POINT.InitialState behavior
            // uml: / { trace("Transition action `` for TEST10_CHOICE_POINT.InitialState to TEST10_S1."); } TransitionTo(TEST10_S1)
            {
                // Step 1: Exit states until we reach `TEST10_CHOICE_POINT` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for TEST10_CHOICE_POINT.InitialState to TEST10_S1.");`.
                console.log("Transition action `` for TEST10_CHOICE_POINT.InitialState to TEST10_S1.");
                
                // Step 3: Enter/move towards transition target `TEST10_S1`.
                this._TEST10_ROOT_enter();
                this._TEST10_S1_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.TEST10_S1;
                // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                return;
            } // end of behavior for TEST10_CHOICE_POINT.InitialState
        } // end of behavior for DECIDE
    }
    
    _DECIDE_ev2()
    {
        // No ancestor state handles `ev2` event.
        
        // DECIDE behavior
        // uml: EV2 [trace_guard("State DECIDE: check behavior `EV2 TransitionTo(TEST2_REGULAR_EVENT_TESTING)`.", true)] / { trace("Transition action `` for DECIDE to TEST2_REGULAR_EVENT_TESTING."); } TransitionTo(TEST2_REGULAR_EVENT_TESTING)
        if (trace_guard("State DECIDE: check behavior `EV2 TransitionTo(TEST2_REGULAR_EVENT_TESTING)`.", true))
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            this._DECIDE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for DECIDE to TEST2_REGULAR_EVENT_TESTING.");`.
            console.log("Transition action `` for DECIDE to TEST2_REGULAR_EVENT_TESTING.");
            
            // Step 3: Enter/move towards transition target `TEST2_REGULAR_EVENT_TESTING`.
            this._TEST2_REGULAR_EVENT_TESTING_enter();
            
            // TEST2_REGULAR_EVENT_TESTING.InitialState behavior
            // uml: / { trace("Transition action `` for TEST2_REGULAR_EVENT_TESTING.InitialState to TEST2_ROOT."); } TransitionTo(TEST2_ROOT)
            {
                // Step 1: Exit states until we reach `TEST2_REGULAR_EVENT_TESTING` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for TEST2_REGULAR_EVENT_TESTING.InitialState to TEST2_ROOT.");`.
                console.log("Transition action `` for TEST2_REGULAR_EVENT_TESTING.InitialState to TEST2_ROOT.");
                
                // Step 3: Enter/move towards transition target `TEST2_ROOT`.
                this._TEST2_ROOT_enter();
                
                // TEST2_ROOT.InitialState behavior
                // uml: / { trace("Transition action `` for TEST2_ROOT.InitialState to TEST2_S1_1."); } TransitionTo(TEST2_S1_1)
                {
                    // Step 1: Exit states until we reach `TEST2_ROOT` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                    
                    // Step 2: Transition action: `trace("Transition action `` for TEST2_ROOT.InitialState to TEST2_S1_1.");`.
                    console.log("Transition action `` for TEST2_ROOT.InitialState to TEST2_S1_1.");
                    
                    // Step 3: Enter/move towards transition target `TEST2_S1_1`.
                    this._TEST2_S1_enter();
                    this._TEST2_S1_1_enter();
                    
                    // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                    this.stateId = Spec2Sm.StateId.TEST2_S1_1;
                    // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                    return;
                } // end of behavior for TEST2_ROOT.InitialState
            } // end of behavior for TEST2_REGULAR_EVENT_TESTING.InitialState
        } // end of behavior for DECIDE
    }
    
    _DECIDE_ev3()
    {
        // No ancestor state handles `ev3` event.
        
        // DECIDE behavior
        // uml: EV3 [trace_guard("State DECIDE: check behavior `EV3 TransitionTo(TEST3_BEHAVIOR_ORDERING)`.", true)] / { trace("Transition action `` for DECIDE to TEST3_BEHAVIOR_ORDERING."); } TransitionTo(TEST3_BEHAVIOR_ORDERING)
        if (trace_guard("State DECIDE: check behavior `EV3 TransitionTo(TEST3_BEHAVIOR_ORDERING)`.", true))
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            this._DECIDE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for DECIDE to TEST3_BEHAVIOR_ORDERING.");`.
            console.log("Transition action `` for DECIDE to TEST3_BEHAVIOR_ORDERING.");
            
            // Step 3: Enter/move towards transition target `TEST3_BEHAVIOR_ORDERING`.
            this._TEST3_BEHAVIOR_ORDERING_enter();
            
            // TEST3_BEHAVIOR_ORDERING.InitialState behavior
            // uml: / { trace("Transition action `` for TEST3_BEHAVIOR_ORDERING.InitialState to TEST3_ROOT."); } TransitionTo(TEST3_ROOT)
            {
                // Step 1: Exit states until we reach `TEST3_BEHAVIOR_ORDERING` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for TEST3_BEHAVIOR_ORDERING.InitialState to TEST3_ROOT.");`.
                console.log("Transition action `` for TEST3_BEHAVIOR_ORDERING.InitialState to TEST3_ROOT.");
                
                // Step 3: Enter/move towards transition target `TEST3_ROOT`.
                this._TEST3_ROOT_enter();
                
                // TEST3_ROOT.InitialState behavior
                // uml: / { trace("Transition action `` for TEST3_ROOT.InitialState to TEST3_S1."); } TransitionTo(TEST3_S1)
                {
                    // Step 1: Exit states until we reach `TEST3_ROOT` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                    
                    // Step 2: Transition action: `trace("Transition action `` for TEST3_ROOT.InitialState to TEST3_S1.");`.
                    console.log("Transition action `` for TEST3_ROOT.InitialState to TEST3_S1.");
                    
                    // Step 3: Enter/move towards transition target `TEST3_S1`.
                    this._TEST3_S1_enter();
                    
                    // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                    this.stateId = Spec2Sm.StateId.TEST3_S1;
                    // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                    return;
                } // end of behavior for TEST3_ROOT.InitialState
            } // end of behavior for TEST3_BEHAVIOR_ORDERING.InitialState
        } // end of behavior for DECIDE
    }
    
    _DECIDE_ev4()
    {
        // No ancestor state handles `ev4` event.
        
        // DECIDE behavior
        // uml: EV4 [trace_guard("State DECIDE: check behavior `EV4 TransitionTo(TEST4_PARENT_CHILD_TRANSITIONS)`.", true)] / { trace("Transition action `` for DECIDE to TEST4_PARENT_CHILD_TRANSITIONS."); } TransitionTo(TEST4_PARENT_CHILD_TRANSITIONS)
        if (trace_guard("State DECIDE: check behavior `EV4 TransitionTo(TEST4_PARENT_CHILD_TRANSITIONS)`.", true))
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            this._DECIDE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for DECIDE to TEST4_PARENT_CHILD_TRANSITIONS.");`.
            console.log("Transition action `` for DECIDE to TEST4_PARENT_CHILD_TRANSITIONS.");
            
            // Step 3: Enter/move towards transition target `TEST4_PARENT_CHILD_TRANSITIONS`.
            this._TEST4_PARENT_CHILD_TRANSITIONS_enter();
            
            // TEST4_PARENT_CHILD_TRANSITIONS.InitialState behavior
            // uml: / { trace("Transition action `` for TEST4_PARENT_CHILD_TRANSITIONS.InitialState to TEST4_DECIDE."); } TransitionTo(TEST4_DECIDE)
            {
                // Step 1: Exit states until we reach `TEST4_PARENT_CHILD_TRANSITIONS` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for TEST4_PARENT_CHILD_TRANSITIONS.InitialState to TEST4_DECIDE.");`.
                console.log("Transition action `` for TEST4_PARENT_CHILD_TRANSITIONS.InitialState to TEST4_DECIDE.");
                
                // Step 3: Enter/move towards transition target `TEST4_DECIDE`.
                this._TEST4_DECIDE_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.TEST4_DECIDE;
                // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                return;
            } // end of behavior for TEST4_PARENT_CHILD_TRANSITIONS.InitialState
        } // end of behavior for DECIDE
    }
    
    _DECIDE_ev5()
    {
        // No ancestor state handles `ev5` event.
        
        // DECIDE behavior
        // uml: EV5 [trace_guard("State DECIDE: check behavior `EV5 TransitionTo(TEST5_PARENT_CHILD_TRANSITIONS_ALIAS)`.", true)] / { trace("Transition action `` for DECIDE to TEST5_PARENT_CHILD_TRANSITIONS_ALIAS."); } TransitionTo(TEST5_PARENT_CHILD_TRANSITIONS_ALIAS)
        if (trace_guard("State DECIDE: check behavior `EV5 TransitionTo(TEST5_PARENT_CHILD_TRANSITIONS_ALIAS)`.", true))
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            this._DECIDE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for DECIDE to TEST5_PARENT_CHILD_TRANSITIONS_ALIAS.");`.
            console.log("Transition action `` for DECIDE to TEST5_PARENT_CHILD_TRANSITIONS_ALIAS.");
            
            // Step 3: Enter/move towards transition target `TEST5_PARENT_CHILD_TRANSITIONS_ALIAS`.
            this._TEST5_PARENT_CHILD_TRANSITIONS_ALIAS_enter();
            
            // TEST5_PARENT_CHILD_TRANSITIONS_ALIAS.InitialState behavior
            // uml: / { trace("Transition action `` for TEST5_PARENT_CHILD_TRANSITIONS_ALIAS.InitialState to TEST5_ROOT."); } TransitionTo(TEST5_ROOT)
            {
                // Step 1: Exit states until we reach `TEST5_PARENT_CHILD_TRANSITIONS_ALIAS` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for TEST5_PARENT_CHILD_TRANSITIONS_ALIAS.InitialState to TEST5_ROOT.");`.
                console.log("Transition action `` for TEST5_PARENT_CHILD_TRANSITIONS_ALIAS.InitialState to TEST5_ROOT.");
                
                // Step 3: Enter/move towards transition target `TEST5_ROOT`.
                this._TEST5_ROOT_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.TEST5_ROOT;
                // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                return;
            } // end of behavior for TEST5_PARENT_CHILD_TRANSITIONS_ALIAS.InitialState
        } // end of behavior for DECIDE
    }
    
    _DECIDE_ev6()
    {
        // No ancestor state handles `ev6` event.
        
        // DECIDE behavior
        // uml: EV6 [trace_guard("State DECIDE: check behavior `EV6 TransitionTo(TEST6_VARIABLES)`.", true)] / { trace("Transition action `` for DECIDE to TEST6_VARIABLES."); } TransitionTo(TEST6_VARIABLES)
        if (trace_guard("State DECIDE: check behavior `EV6 TransitionTo(TEST6_VARIABLES)`.", true))
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            this._DECIDE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for DECIDE to TEST6_VARIABLES.");`.
            console.log("Transition action `` for DECIDE to TEST6_VARIABLES.");
            
            // Step 3: Enter/move towards transition target `TEST6_VARIABLES`.
            this._TEST6_VARIABLES_enter();
            
            // TEST6_VARIABLES.InitialState behavior
            // uml: / { trace("Transition action `` for TEST6_VARIABLES.InitialState to TEST6_ROOT."); } TransitionTo(TEST6_ROOT)
            {
                // Step 1: Exit states until we reach `TEST6_VARIABLES` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for TEST6_VARIABLES.InitialState to TEST6_ROOT.");`.
                console.log("Transition action `` for TEST6_VARIABLES.InitialState to TEST6_ROOT.");
                
                // Step 3: Enter/move towards transition target `TEST6_ROOT`.
                this._TEST6_ROOT_enter();
                
                // TEST6_ROOT.InitialState behavior
                // uml: / { trace("Transition action `` for TEST6_ROOT.InitialState to TEST6_ROOT__DECIDE."); } TransitionTo(TEST6_ROOT__DECIDE)
                {
                    // Step 1: Exit states until we reach `TEST6_ROOT` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                    
                    // Step 2: Transition action: `trace("Transition action `` for TEST6_ROOT.InitialState to TEST6_ROOT__DECIDE.");`.
                    console.log("Transition action `` for TEST6_ROOT.InitialState to TEST6_ROOT__DECIDE.");
                    
                    // Step 3: Enter/move towards transition target `TEST6_ROOT__DECIDE`.
                    this._TEST6_ROOT__DECIDE_enter();
                    
                    // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                    this.stateId = Spec2Sm.StateId.TEST6_ROOT__DECIDE;
                    // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                    return;
                } // end of behavior for TEST6_ROOT.InitialState
            } // end of behavior for TEST6_VARIABLES.InitialState
        } // end of behavior for DECIDE
    }
    
    _DECIDE_ev7()
    {
        // No ancestor state handles `ev7` event.
        
        // DECIDE behavior
        // uml: EV7 [trace_guard("State DECIDE: check behavior `EV7 TransitionTo(TEST7_INITIAL_OR_HISTORY)`.", true)] / { trace("Transition action `` for DECIDE to TEST7_INITIAL_OR_HISTORY."); } TransitionTo(TEST7_INITIAL_OR_HISTORY)
        if (trace_guard("State DECIDE: check behavior `EV7 TransitionTo(TEST7_INITIAL_OR_HISTORY)`.", true))
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            this._DECIDE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for DECIDE to TEST7_INITIAL_OR_HISTORY.");`.
            console.log("Transition action `` for DECIDE to TEST7_INITIAL_OR_HISTORY.");
            
            // Step 3: Enter/move towards transition target `TEST7_INITIAL_OR_HISTORY`.
            this._TEST7_INITIAL_OR_HISTORY_enter();
            
            // TEST7_INITIAL_OR_HISTORY.InitialState behavior
            // uml: / { trace("Transition action `` for TEST7_INITIAL_OR_HISTORY.InitialState to TEST7_DECIDE."); } TransitionTo(TEST7_DECIDE)
            {
                // Step 1: Exit states until we reach `TEST7_INITIAL_OR_HISTORY` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for TEST7_INITIAL_OR_HISTORY.InitialState to TEST7_DECIDE.");`.
                console.log("Transition action `` for TEST7_INITIAL_OR_HISTORY.InitialState to TEST7_DECIDE.");
                
                // Step 3: Enter/move towards transition target `TEST7_DECIDE`.
                this._TEST7_DECIDE_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.TEST7_DECIDE;
                // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                return;
            } // end of behavior for TEST7_INITIAL_OR_HISTORY.InitialState
        } // end of behavior for DECIDE
    }
    
    _DECIDE_ev8()
    {
        // No ancestor state handles `ev8` event.
        
        // DECIDE behavior
        // uml: EV8 [trace_guard("State DECIDE: check behavior `EV8 TransitionTo(TEST8_ENTRY_CHOICE)`.", true)] / { trace("Transition action `` for DECIDE to TEST8_ENTRY_CHOICE."); } TransitionTo(TEST8_ENTRY_CHOICE)
        if (trace_guard("State DECIDE: check behavior `EV8 TransitionTo(TEST8_ENTRY_CHOICE)`.", true))
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            this._DECIDE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for DECIDE to TEST8_ENTRY_CHOICE.");`.
            console.log("Transition action `` for DECIDE to TEST8_ENTRY_CHOICE.");
            
            // Step 3: Enter/move towards transition target `TEST8_ENTRY_CHOICE`.
            this._TEST8_ENTRY_CHOICE_enter();
            
            // TEST8_ENTRY_CHOICE.InitialState behavior
            // uml: / { trace("Transition action `` for TEST8_ENTRY_CHOICE.InitialState to TEST8_ROOT.EntryPoint(1)."); } TransitionTo(TEST8_ROOT.EntryPoint(1))
            {
                // Step 1: Exit states until we reach `TEST8_ENTRY_CHOICE` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for TEST8_ENTRY_CHOICE.InitialState to TEST8_ROOT.EntryPoint(1).");`.
                console.log("Transition action `` for TEST8_ENTRY_CHOICE.InitialState to TEST8_ROOT.EntryPoint(1).");
                
                // Step 3: Enter/move towards transition target `TEST8_ROOT.EntryPoint(1)`.
                this._TEST8_ROOT_enter();
                // TEST8_ROOT.EntryPoint(1) is a pseudo state and cannot have an `enter` trigger.
                
                // Finish transition by calling pseudo state transition function.
                this._TEST8_ROOT_EntryPoint_1__transition();
                return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
            } // end of behavior for TEST8_ENTRY_CHOICE.InitialState
        } // end of behavior for DECIDE
    }
    
    _DECIDE_ev9()
    {
        // No ancestor state handles `ev9` event.
        
        // DECIDE behavior
        // uml: EV9 [trace_guard("State DECIDE: check behavior `EV9 TransitionTo(TEST9_EXIT_CHOICE)`.", true)] / { trace("Transition action `` for DECIDE to TEST9_EXIT_CHOICE."); } TransitionTo(TEST9_EXIT_CHOICE)
        if (trace_guard("State DECIDE: check behavior `EV9 TransitionTo(TEST9_EXIT_CHOICE)`.", true))
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            this._DECIDE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for DECIDE to TEST9_EXIT_CHOICE.");`.
            console.log("Transition action `` for DECIDE to TEST9_EXIT_CHOICE.");
            
            // Step 3: Enter/move towards transition target `TEST9_EXIT_CHOICE`.
            this._TEST9_EXIT_CHOICE_enter();
            
            // TEST9_EXIT_CHOICE.InitialState behavior
            // uml: / { trace("Transition action `` for TEST9_EXIT_CHOICE.InitialState to TEST9_DECIDE."); } TransitionTo(TEST9_DECIDE)
            {
                // Step 1: Exit states until we reach `TEST9_EXIT_CHOICE` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for TEST9_EXIT_CHOICE.InitialState to TEST9_DECIDE.");`.
                console.log("Transition action `` for TEST9_EXIT_CHOICE.InitialState to TEST9_DECIDE.");
                
                // Step 3: Enter/move towards transition target `TEST9_DECIDE`.
                this._TEST9_DECIDE_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.TEST9_DECIDE;
                // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                return;
            } // end of behavior for TEST9_EXIT_CHOICE.InitialState
        } // end of behavior for DECIDE
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state PREFIXING
    ////////////////////////////////////////////////////////////////////////////////
    
    _PREFIXING_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._PREFIXING_exit;
        
        // PREFIXING behavior
        // uml: enter / { trace("Enter PREFIXING."); }
        {
            // Step 1: execute action `trace("Enter PREFIXING.");`
            console.log("Enter PREFIXING.");
        } // end of behavior for PREFIXING
    }
    
    _PREFIXING_exit()
    {
        // PREFIXING behavior
        // uml: exit / { trace("Exit PREFIXING."); }
        {
            // Step 1: execute action `trace("Exit PREFIXING.");`
            console.log("Exit PREFIXING.");
        } // end of behavior for PREFIXING
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._ROOT_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state PREFIXING__ORDER_MENU
    ////////////////////////////////////////////////////////////////////////////////
    
    _PREFIXING__ORDER_MENU_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._PREFIXING__ORDER_MENU_exit;
        
        // PREFIXING__ORDER_MENU behavior
        // uml: enter / { trace("Enter PREFIXING__ORDER_MENU."); }
        {
            // Step 1: execute action `trace("Enter PREFIXING__ORDER_MENU.");`
            console.log("Enter PREFIXING__ORDER_MENU.");
        } // end of behavior for PREFIXING__ORDER_MENU
    }
    
    _PREFIXING__ORDER_MENU_exit()
    {
        // PREFIXING__ORDER_MENU behavior
        // uml: exit / { trace("Exit PREFIXING__ORDER_MENU."); }
        {
            // Step 1: execute action `trace("Exit PREFIXING__ORDER_MENU.");`
            console.log("Exit PREFIXING__ORDER_MENU.");
        } // end of behavior for PREFIXING__ORDER_MENU
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._PREFIXING_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state PREFIXING__OM__BEVERAGE
    ////////////////////////////////////////////////////////////////////////////////
    
    _PREFIXING__OM__BEVERAGE_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._PREFIXING__OM__BEVERAGE_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = this._PREFIXING__OM__BEVERAGE_ev2;
        
        // PREFIXING__OM__BEVERAGE behavior
        // uml: enter / { trace("Enter PREFIXING__OM__BEVERAGE."); }
        {
            // Step 1: execute action `trace("Enter PREFIXING__OM__BEVERAGE.");`
            console.log("Enter PREFIXING__OM__BEVERAGE.");
        } // end of behavior for PREFIXING__OM__BEVERAGE
    }
    
    _PREFIXING__OM__BEVERAGE_exit()
    {
        // PREFIXING__OM__BEVERAGE behavior
        // uml: exit / { trace("Exit PREFIXING__OM__BEVERAGE."); }
        {
            // Step 1: execute action `trace("Exit PREFIXING__OM__BEVERAGE.");`
            console.log("Exit PREFIXING__OM__BEVERAGE.");
        } // end of behavior for PREFIXING__OM__BEVERAGE
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._PREFIXING__ORDER_MENU_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = null;  // no ancestor listens to this event
    }
    
    _PREFIXING__OM__BEVERAGE_ev2()
    {
        // No ancestor state handles `ev2` event.
        
        // PREFIXING__OM__BEVERAGE behavior
        // uml: EV2 [trace_guard("State PREFIXING__OM__BEVERAGE: check behavior `EV2 TransitionTo(PREFIXING__OM__VEG)`.", true)] / { trace("Transition action `` for PREFIXING__OM__BEVERAGE to PREFIXING__OM__VEG."); } TransitionTo(PREFIXING__OM__VEG)
        if (trace_guard("State PREFIXING__OM__BEVERAGE: check behavior `EV2 TransitionTo(PREFIXING__OM__VEG)`.", true))
        {
            // Step 1: Exit states until we reach `PREFIXING__ORDER_MENU` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._PREFIXING__ORDER_MENU_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for PREFIXING__OM__BEVERAGE to PREFIXING__OM__VEG.");`.
            console.log("Transition action `` for PREFIXING__OM__BEVERAGE to PREFIXING__OM__VEG.");
            
            // Step 3: Enter/move towards transition target `PREFIXING__OM__VEG`.
            this._PREFIXING__OM__VEG_enter();
            
            // PREFIXING__OM__VEG.InitialState behavior
            // uml: / { trace("Transition action `` for PREFIXING__OM__VEG.InitialState to PREFIXING__OM__VEG__NONE."); } TransitionTo(PREFIXING__OM__VEG__NONE)
            {
                // Step 1: Exit states until we reach `PREFIXING__OM__VEG` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for PREFIXING__OM__VEG.InitialState to PREFIXING__OM__VEG__NONE.");`.
                console.log("Transition action `` for PREFIXING__OM__VEG.InitialState to PREFIXING__OM__VEG__NONE.");
                
                // Step 3: Enter/move towards transition target `PREFIXING__OM__VEG__NONE`.
                this._PREFIXING__OM__VEG__NONE_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.PREFIXING__OM__VEG__NONE;
                // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                return;
            } // end of behavior for PREFIXING__OM__VEG.InitialState
        } // end of behavior for PREFIXING__OM__BEVERAGE
    }
    
    _PREFIXING__OM__BEVERAGE_InitialState_transition()
    {
        // PREFIXING__OM__BEVERAGE.InitialState behavior
        // uml: / { trace("Transition action `` for PREFIXING__OM__BEVERAGE.InitialState to PREFIXING__OM__BEV__NONE."); } TransitionTo(PREFIXING__OM__BEV__NONE)
        {
            // Step 1: Exit states until we reach `PREFIXING__OM__BEVERAGE` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for PREFIXING__OM__BEVERAGE.InitialState to PREFIXING__OM__BEV__NONE.");`.
            console.log("Transition action `` for PREFIXING__OM__BEVERAGE.InitialState to PREFIXING__OM__BEV__NONE.");
            
            // Step 3: Enter/move towards transition target `PREFIXING__OM__BEV__NONE`.
            this._PREFIXING__OM__BEV__NONE_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.PREFIXING__OM__BEV__NONE;
            this._ancestorEventHandler = null;
            return;
        } // end of behavior for PREFIXING__OM__BEVERAGE.InitialState
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state PREFIXING__OM__BEV__NONE
    ////////////////////////////////////////////////////////////////////////////////
    
    _PREFIXING__OM__BEV__NONE_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._PREFIXING__OM__BEV__NONE_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._PREFIXING__OM__BEV__NONE_ev1;
        
        // PREFIXING__OM__BEV__NONE behavior
        // uml: enter / { trace("Enter PREFIXING__OM__BEV__NONE."); }
        {
            // Step 1: execute action `trace("Enter PREFIXING__OM__BEV__NONE.");`
            console.log("Enter PREFIXING__OM__BEV__NONE.");
        } // end of behavior for PREFIXING__OM__BEV__NONE
    }
    
    _PREFIXING__OM__BEV__NONE_exit()
    {
        // PREFIXING__OM__BEV__NONE behavior
        // uml: exit / { trace("Exit PREFIXING__OM__BEV__NONE."); }
        {
            // Step 1: execute action `trace("Exit PREFIXING__OM__BEV__NONE.");`
            console.log("Exit PREFIXING__OM__BEV__NONE.");
        } // end of behavior for PREFIXING__OM__BEV__NONE
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._PREFIXING__OM__BEVERAGE_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _PREFIXING__OM__BEV__NONE_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // PREFIXING__OM__BEV__NONE behavior
        // uml: EV1 [trace_guard("State PREFIXING__OM__BEV__NONE: check behavior `EV1 TransitionTo(PREFIXING__OM__BEV__WATER)`.", true)] / { trace("Transition action `` for PREFIXING__OM__BEV__NONE to PREFIXING__OM__BEV__WATER."); } TransitionTo(PREFIXING__OM__BEV__WATER)
        if (trace_guard("State PREFIXING__OM__BEV__NONE: check behavior `EV1 TransitionTo(PREFIXING__OM__BEV__WATER)`.", true))
        {
            // Step 1: Exit states until we reach `PREFIXING__OM__BEVERAGE` state (Least Common Ancestor for transition).
            this._PREFIXING__OM__BEV__NONE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for PREFIXING__OM__BEV__NONE to PREFIXING__OM__BEV__WATER.");`.
            console.log("Transition action `` for PREFIXING__OM__BEV__NONE to PREFIXING__OM__BEV__WATER.");
            
            // Step 3: Enter/move towards transition target `PREFIXING__OM__BEV__WATER`.
            this._PREFIXING__OM__BEV__WATER_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.PREFIXING__OM__BEV__WATER;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for PREFIXING__OM__BEV__NONE
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state PREFIXING__OM__BEV__TEA
    ////////////////////////////////////////////////////////////////////////////////
    
    _PREFIXING__OM__BEV__TEA_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._PREFIXING__OM__BEV__TEA_exit;
        
        // PREFIXING__OM__BEV__TEA behavior
        // uml: enter / { trace("Enter PREFIXING__OM__BEV__TEA."); }
        {
            // Step 1: execute action `trace("Enter PREFIXING__OM__BEV__TEA.");`
            console.log("Enter PREFIXING__OM__BEV__TEA.");
        } // end of behavior for PREFIXING__OM__BEV__TEA
    }
    
    _PREFIXING__OM__BEV__TEA_exit()
    {
        // PREFIXING__OM__BEV__TEA behavior
        // uml: exit / { trace("Exit PREFIXING__OM__BEV__TEA."); }
        {
            // Step 1: execute action `trace("Exit PREFIXING__OM__BEV__TEA.");`
            console.log("Exit PREFIXING__OM__BEV__TEA.");
        } // end of behavior for PREFIXING__OM__BEV__TEA
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._PREFIXING__OM__BEVERAGE_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state PREFIXING__OM__BEV__WATER
    ////////////////////////////////////////////////////////////////////////////////
    
    _PREFIXING__OM__BEV__WATER_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._PREFIXING__OM__BEV__WATER_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._PREFIXING__OM__BEV__WATER_ev1;
        
        // PREFIXING__OM__BEV__WATER behavior
        // uml: enter / { trace("Enter PREFIXING__OM__BEV__WATER."); }
        {
            // Step 1: execute action `trace("Enter PREFIXING__OM__BEV__WATER.");`
            console.log("Enter PREFIXING__OM__BEV__WATER.");
        } // end of behavior for PREFIXING__OM__BEV__WATER
    }
    
    _PREFIXING__OM__BEV__WATER_exit()
    {
        // PREFIXING__OM__BEV__WATER behavior
        // uml: exit / { trace("Exit PREFIXING__OM__BEV__WATER."); }
        {
            // Step 1: execute action `trace("Exit PREFIXING__OM__BEV__WATER.");`
            console.log("Exit PREFIXING__OM__BEV__WATER.");
        } // end of behavior for PREFIXING__OM__BEV__WATER
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._PREFIXING__OM__BEVERAGE_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _PREFIXING__OM__BEV__WATER_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // PREFIXING__OM__BEV__WATER behavior
        // uml: EV1 [trace_guard("State PREFIXING__OM__BEV__WATER: check behavior `EV1 TransitionTo(PREFIXING__OM__BEV__TEA)`.", true)] / { trace("Transition action `` for PREFIXING__OM__BEV__WATER to PREFIXING__OM__BEV__TEA."); } TransitionTo(PREFIXING__OM__BEV__TEA)
        if (trace_guard("State PREFIXING__OM__BEV__WATER: check behavior `EV1 TransitionTo(PREFIXING__OM__BEV__TEA)`.", true))
        {
            // Step 1: Exit states until we reach `PREFIXING__OM__BEVERAGE` state (Least Common Ancestor for transition).
            this._PREFIXING__OM__BEV__WATER_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for PREFIXING__OM__BEV__WATER to PREFIXING__OM__BEV__TEA.");`.
            console.log("Transition action `` for PREFIXING__OM__BEV__WATER to PREFIXING__OM__BEV__TEA.");
            
            // Step 3: Enter/move towards transition target `PREFIXING__OM__BEV__TEA`.
            this._PREFIXING__OM__BEV__TEA_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.PREFIXING__OM__BEV__TEA;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for PREFIXING__OM__BEV__WATER
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state PREFIXING__OM__VEG
    ////////////////////////////////////////////////////////////////////////////////
    
    _PREFIXING__OM__VEG_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._PREFIXING__OM__VEG_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = this._PREFIXING__OM__VEG_ev2;
        
        // PREFIXING__OM__VEG behavior
        // uml: enter / { trace("Enter PREFIXING__OM__VEG."); }
        {
            // Step 1: execute action `trace("Enter PREFIXING__OM__VEG.");`
            console.log("Enter PREFIXING__OM__VEG.");
        } // end of behavior for PREFIXING__OM__VEG
    }
    
    _PREFIXING__OM__VEG_exit()
    {
        // PREFIXING__OM__VEG behavior
        // uml: exit / { trace("Exit PREFIXING__OM__VEG."); }
        {
            // Step 1: execute action `trace("Exit PREFIXING__OM__VEG.");`
            console.log("Exit PREFIXING__OM__VEG.");
        } // end of behavior for PREFIXING__OM__VEG
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._PREFIXING__ORDER_MENU_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = null;  // no ancestor listens to this event
    }
    
    _PREFIXING__OM__VEG_ev2()
    {
        // No ancestor state handles `ev2` event.
        
        // PREFIXING__OM__VEG behavior
        // uml: EV2 [trace_guard("State PREFIXING__OM__VEG: check behavior `EV2 TransitionTo(PREFIXING__OM__BEVERAGE)`.", true)] / { trace("Transition action `` for PREFIXING__OM__VEG to PREFIXING__OM__BEVERAGE."); } TransitionTo(PREFIXING__OM__BEVERAGE)
        if (trace_guard("State PREFIXING__OM__VEG: check behavior `EV2 TransitionTo(PREFIXING__OM__BEVERAGE)`.", true))
        {
            // Step 1: Exit states until we reach `PREFIXING__ORDER_MENU` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._PREFIXING__ORDER_MENU_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for PREFIXING__OM__VEG to PREFIXING__OM__BEVERAGE.");`.
            console.log("Transition action `` for PREFIXING__OM__VEG to PREFIXING__OM__BEVERAGE.");
            
            // Step 3: Enter/move towards transition target `PREFIXING__OM__BEVERAGE`.
            this._PREFIXING__OM__BEVERAGE_enter();
            
            // Finish transition by calling pseudo state transition function.
            this._PREFIXING__OM__BEVERAGE_InitialState_transition();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for PREFIXING__OM__VEG
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state PREFIXING__OM__VEG__NONE
    ////////////////////////////////////////////////////////////////////////////////
    
    _PREFIXING__OM__VEG__NONE_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._PREFIXING__OM__VEG__NONE_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._PREFIXING__OM__VEG__NONE_ev1;
        
        // PREFIXING__OM__VEG__NONE behavior
        // uml: enter / { trace("Enter PREFIXING__OM__VEG__NONE."); }
        {
            // Step 1: execute action `trace("Enter PREFIXING__OM__VEG__NONE.");`
            console.log("Enter PREFIXING__OM__VEG__NONE.");
        } // end of behavior for PREFIXING__OM__VEG__NONE
    }
    
    _PREFIXING__OM__VEG__NONE_exit()
    {
        // PREFIXING__OM__VEG__NONE behavior
        // uml: exit / { trace("Exit PREFIXING__OM__VEG__NONE."); }
        {
            // Step 1: execute action `trace("Exit PREFIXING__OM__VEG__NONE.");`
            console.log("Exit PREFIXING__OM__VEG__NONE.");
        } // end of behavior for PREFIXING__OM__VEG__NONE
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._PREFIXING__OM__VEG_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _PREFIXING__OM__VEG__NONE_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // PREFIXING__OM__VEG__NONE behavior
        // uml: EV1 [trace_guard("State PREFIXING__OM__VEG__NONE: check behavior `EV1 TransitionTo(PREFIXING__OM__VEG__POTATO)`.", true)] / { trace("Transition action `` for PREFIXING__OM__VEG__NONE to PREFIXING__OM__VEG__POTATO."); } TransitionTo(PREFIXING__OM__VEG__POTATO)
        if (trace_guard("State PREFIXING__OM__VEG__NONE: check behavior `EV1 TransitionTo(PREFIXING__OM__VEG__POTATO)`.", true))
        {
            // Step 1: Exit states until we reach `PREFIXING__OM__VEG` state (Least Common Ancestor for transition).
            this._PREFIXING__OM__VEG__NONE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for PREFIXING__OM__VEG__NONE to PREFIXING__OM__VEG__POTATO.");`.
            console.log("Transition action `` for PREFIXING__OM__VEG__NONE to PREFIXING__OM__VEG__POTATO.");
            
            // Step 3: Enter/move towards transition target `PREFIXING__OM__VEG__POTATO`.
            this._PREFIXING__OM__VEG__POTATO_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.PREFIXING__OM__VEG__POTATO;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for PREFIXING__OM__VEG__NONE
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state PREFIXING__OM__VEG__POTATO
    ////////////////////////////////////////////////////////////////////////////////
    
    _PREFIXING__OM__VEG__POTATO_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._PREFIXING__OM__VEG__POTATO_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._PREFIXING__OM__VEG__POTATO_ev1;
        
        // PREFIXING__OM__VEG__POTATO behavior
        // uml: enter / { trace("Enter PREFIXING__OM__VEG__POTATO."); }
        {
            // Step 1: execute action `trace("Enter PREFIXING__OM__VEG__POTATO.");`
            console.log("Enter PREFIXING__OM__VEG__POTATO.");
        } // end of behavior for PREFIXING__OM__VEG__POTATO
    }
    
    _PREFIXING__OM__VEG__POTATO_exit()
    {
        // PREFIXING__OM__VEG__POTATO behavior
        // uml: exit / { trace("Exit PREFIXING__OM__VEG__POTATO."); }
        {
            // Step 1: execute action `trace("Exit PREFIXING__OM__VEG__POTATO.");`
            console.log("Exit PREFIXING__OM__VEG__POTATO.");
        } // end of behavior for PREFIXING__OM__VEG__POTATO
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._PREFIXING__OM__VEG_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _PREFIXING__OM__VEG__POTATO_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // PREFIXING__OM__VEG__POTATO behavior
        // uml: EV1 [trace_guard("State PREFIXING__OM__VEG__POTATO: check behavior `EV1 TransitionTo(PREFIXING__OM__VEG__YAM)`.", true)] / { trace("Transition action `` for PREFIXING__OM__VEG__POTATO to PREFIXING__OM__VEG__YAM."); } TransitionTo(PREFIXING__OM__VEG__YAM)
        if (trace_guard("State PREFIXING__OM__VEG__POTATO: check behavior `EV1 TransitionTo(PREFIXING__OM__VEG__YAM)`.", true))
        {
            // Step 1: Exit states until we reach `PREFIXING__OM__VEG` state (Least Common Ancestor for transition).
            this._PREFIXING__OM__VEG__POTATO_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for PREFIXING__OM__VEG__POTATO to PREFIXING__OM__VEG__YAM.");`.
            console.log("Transition action `` for PREFIXING__OM__VEG__POTATO to PREFIXING__OM__VEG__YAM.");
            
            // Step 3: Enter/move towards transition target `PREFIXING__OM__VEG__YAM`.
            this._PREFIXING__OM__VEG__YAM_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.PREFIXING__OM__VEG__YAM;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for PREFIXING__OM__VEG__POTATO
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state PREFIXING__OM__VEG__YAM
    ////////////////////////////////////////////////////////////////////////////////
    
    _PREFIXING__OM__VEG__YAM_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._PREFIXING__OM__VEG__YAM_exit;
        
        // PREFIXING__OM__VEG__YAM behavior
        // uml: enter / { trace("Enter PREFIXING__OM__VEG__YAM."); }
        {
            // Step 1: execute action `trace("Enter PREFIXING__OM__VEG__YAM.");`
            console.log("Enter PREFIXING__OM__VEG__YAM.");
        } // end of behavior for PREFIXING__OM__VEG__YAM
    }
    
    _PREFIXING__OM__VEG__YAM_exit()
    {
        // PREFIXING__OM__VEG__YAM behavior
        // uml: exit / { trace("Exit PREFIXING__OM__VEG__YAM."); }
        {
            // Step 1: execute action `trace("Exit PREFIXING__OM__VEG__YAM.");`
            console.log("Exit PREFIXING__OM__VEG__YAM.");
        } // end of behavior for PREFIXING__OM__VEG__YAM
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._PREFIXING__OM__VEG_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state PREFIXING__SHOWS_MANUAL_PREFIX
    ////////////////////////////////////////////////////////////////////////////////
    
    _PREFIXING__SHOWS_MANUAL_PREFIX_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._PREFIXING__SHOWS_MANUAL_PREFIX_exit;
        
        // PREFIXING__SHOWS_MANUAL_PREFIX behavior
        // uml: enter / { trace("Enter PREFIXING__SHOWS_MANUAL_PREFIX."); }
        {
            // Step 1: execute action `trace("Enter PREFIXING__SHOWS_MANUAL_PREFIX.");`
            console.log("Enter PREFIXING__SHOWS_MANUAL_PREFIX.");
        } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX
    }
    
    _PREFIXING__SHOWS_MANUAL_PREFIX_exit()
    {
        // PREFIXING__SHOWS_MANUAL_PREFIX behavior
        // uml: exit / { trace("Exit PREFIXING__SHOWS_MANUAL_PREFIX."); }
        {
            // Step 1: execute action `trace("Exit PREFIXING__SHOWS_MANUAL_PREFIX.");`
            console.log("Exit PREFIXING__SHOWS_MANUAL_PREFIX.");
        } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._PREFIXING_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state PREFIXING__SHOWS_MANUAL_PREFIX__ORDER_MENU
    ////////////////////////////////////////////////////////////////////////////////
    
    _PREFIXING__SHOWS_MANUAL_PREFIX__ORDER_MENU_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._PREFIXING__SHOWS_MANUAL_PREFIX__ORDER_MENU_exit;
        
        // PREFIXING__SHOWS_MANUAL_PREFIX__ORDER_MENU behavior
        // uml: enter / { trace("Enter PREFIXING__SHOWS_MANUAL_PREFIX__ORDER_MENU."); }
        {
            // Step 1: execute action `trace("Enter PREFIXING__SHOWS_MANUAL_PREFIX__ORDER_MENU.");`
            console.log("Enter PREFIXING__SHOWS_MANUAL_PREFIX__ORDER_MENU.");
        } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX__ORDER_MENU
    }
    
    _PREFIXING__SHOWS_MANUAL_PREFIX__ORDER_MENU_exit()
    {
        // PREFIXING__SHOWS_MANUAL_PREFIX__ORDER_MENU behavior
        // uml: exit / { trace("Exit PREFIXING__SHOWS_MANUAL_PREFIX__ORDER_MENU."); }
        {
            // Step 1: execute action `trace("Exit PREFIXING__SHOWS_MANUAL_PREFIX__ORDER_MENU.");`
            console.log("Exit PREFIXING__SHOWS_MANUAL_PREFIX__ORDER_MENU.");
        } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX__ORDER_MENU
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._PREFIXING__SHOWS_MANUAL_PREFIX_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE
    ////////////////////////////////////////////////////////////////////////////////
    
    _PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE_ev2;
        
        // PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE behavior
        // uml: enter / { trace("Enter PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE."); }
        {
            // Step 1: execute action `trace("Enter PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE.");`
            console.log("Enter PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE.");
        } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE
    }
    
    _PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE_exit()
    {
        // PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE behavior
        // uml: exit / { trace("Exit PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE."); }
        {
            // Step 1: execute action `trace("Exit PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE.");`
            console.log("Exit PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE.");
        } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._PREFIXING__SHOWS_MANUAL_PREFIX__ORDER_MENU_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = null;  // no ancestor listens to this event
    }
    
    _PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE_ev2()
    {
        // No ancestor state handles `ev2` event.
        
        // PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE behavior
        // uml: EV2 [trace_guard("State PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE: check behavior `EV2 TransitionTo(PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG)`.", true)] / { trace("Transition action `` for PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE to PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG."); } TransitionTo(PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG)
        if (trace_guard("State PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE: check behavior `EV2 TransitionTo(PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG)`.", true))
        {
            // Step 1: Exit states until we reach `PREFIXING__SHOWS_MANUAL_PREFIX__ORDER_MENU` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._PREFIXING__SHOWS_MANUAL_PREFIX__ORDER_MENU_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE to PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG.");`.
            console.log("Transition action `` for PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE to PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG.");
            
            // Step 3: Enter/move towards transition target `PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG`.
            this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_enter();
            
            // PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG.InitialState behavior
            // uml: / { trace("Transition action `` for PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG.InitialState to PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE."); } TransitionTo(PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE)
            {
                // Step 1: Exit states until we reach `PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG.InitialState to PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE.");`.
                console.log("Transition action `` for PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG.InitialState to PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE.");
                
                // Step 3: Enter/move towards transition target `PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE`.
                this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE;
                // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                return;
            } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG.InitialState
        } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE
    }
    
    _PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE_InitialState_transition()
    {
        // PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE.InitialState behavior
        // uml: / { trace("Transition action `` for PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE.InitialState to PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE."); } TransitionTo(PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE)
        {
            // Step 1: Exit states until we reach `PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE.InitialState to PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE.");`.
            console.log("Transition action `` for PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE.InitialState to PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE.");
            
            // Step 3: Enter/move towards transition target `PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE`.
            this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE;
            this._ancestorEventHandler = null;
            return;
        } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE.InitialState
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE
    ////////////////////////////////////////////////////////////////////////////////
    
    _PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE_ev1;
        
        // PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE behavior
        // uml: enter / { trace("Enter PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE."); }
        {
            // Step 1: execute action `trace("Enter PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE.");`
            console.log("Enter PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE.");
        } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE
    }
    
    _PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE_exit()
    {
        // PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE behavior
        // uml: exit / { trace("Exit PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE."); }
        {
            // Step 1: execute action `trace("Exit PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE.");`
            console.log("Exit PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE.");
        } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE behavior
        // uml: EV1 [trace_guard("State PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE: check behavior `EV1 TransitionTo(PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER)`.", true)] / { trace("Transition action `` for PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE to PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER."); } TransitionTo(PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER)
        if (trace_guard("State PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE: check behavior `EV1 TransitionTo(PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER)`.", true))
        {
            // Step 1: Exit states until we reach `PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE` state (Least Common Ancestor for transition).
            this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE to PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER.");`.
            console.log("Transition action `` for PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE to PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER.");
            
            // Step 3: Enter/move towards transition target `PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER`.
            this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_TEA
    ////////////////////////////////////////////////////////////////////////////////
    
    _PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_TEA_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_TEA_exit;
        
        // PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_TEA behavior
        // uml: enter / { trace("Enter PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_TEA."); }
        {
            // Step 1: execute action `trace("Enter PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_TEA.");`
            console.log("Enter PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_TEA.");
        } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_TEA
    }
    
    _PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_TEA_exit()
    {
        // PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_TEA behavior
        // uml: exit / { trace("Exit PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_TEA."); }
        {
            // Step 1: execute action `trace("Exit PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_TEA.");`
            console.log("Exit PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_TEA.");
        } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_TEA
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER
    ////////////////////////////////////////////////////////////////////////////////
    
    _PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER_ev1;
        
        // PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER behavior
        // uml: enter / { trace("Enter PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER."); }
        {
            // Step 1: execute action `trace("Enter PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER.");`
            console.log("Enter PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER.");
        } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER
    }
    
    _PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER_exit()
    {
        // PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER behavior
        // uml: exit / { trace("Exit PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER."); }
        {
            // Step 1: execute action `trace("Exit PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER.");`
            console.log("Exit PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER.");
        } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER behavior
        // uml: EV1 [trace_guard("State PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER: check behavior `EV1 TransitionTo(PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_TEA)`.", true)] / { trace("Transition action `` for PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER to PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_TEA."); } TransitionTo(PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_TEA)
        if (trace_guard("State PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER: check behavior `EV1 TransitionTo(PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_TEA)`.", true))
        {
            // Step 1: Exit states until we reach `PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE` state (Least Common Ancestor for transition).
            this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER to PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_TEA.");`.
            console.log("Transition action `` for PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER to PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_TEA.");
            
            // Step 3: Enter/move towards transition target `PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_TEA`.
            this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_TEA_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_TEA;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG
    ////////////////////////////////////////////////////////////////////////////////
    
    _PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_ev2;
        
        // PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG behavior
        // uml: enter / { trace("Enter PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG."); }
        {
            // Step 1: execute action `trace("Enter PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG.");`
            console.log("Enter PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG.");
        } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG
    }
    
    _PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_exit()
    {
        // PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG behavior
        // uml: exit / { trace("Exit PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG."); }
        {
            // Step 1: execute action `trace("Exit PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG.");`
            console.log("Exit PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG.");
        } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._PREFIXING__SHOWS_MANUAL_PREFIX__ORDER_MENU_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = null;  // no ancestor listens to this event
    }
    
    _PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_ev2()
    {
        // No ancestor state handles `ev2` event.
        
        // PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG behavior
        // uml: EV2 [trace_guard("State PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG: check behavior `EV2 TransitionTo(PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE)`.", true)] / { trace("Transition action `` for PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG to PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE."); } TransitionTo(PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE)
        if (trace_guard("State PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG: check behavior `EV2 TransitionTo(PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE)`.", true))
        {
            // Step 1: Exit states until we reach `PREFIXING__SHOWS_MANUAL_PREFIX__ORDER_MENU` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._PREFIXING__SHOWS_MANUAL_PREFIX__ORDER_MENU_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG to PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE.");`.
            console.log("Transition action `` for PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG to PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE.");
            
            // Step 3: Enter/move towards transition target `PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE`.
            this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE_enter();
            
            // Finish transition by calling pseudo state transition function.
            this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE_InitialState_transition();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE
    ////////////////////////////////////////////////////////////////////////////////
    
    _PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE_ev1;
        
        // PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE behavior
        // uml: enter / { trace("Enter PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE."); }
        {
            // Step 1: execute action `trace("Enter PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE.");`
            console.log("Enter PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE.");
        } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE
    }
    
    _PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE_exit()
    {
        // PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE behavior
        // uml: exit / { trace("Exit PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE."); }
        {
            // Step 1: execute action `trace("Exit PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE.");`
            console.log("Exit PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE.");
        } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE behavior
        // uml: EV1 [trace_guard("State PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE: check behavior `EV1 TransitionTo(PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO)`.", true)] / { trace("Transition action `` for PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE to PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO."); } TransitionTo(PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO)
        if (trace_guard("State PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE: check behavior `EV1 TransitionTo(PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO)`.", true))
        {
            // Step 1: Exit states until we reach `PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG` state (Least Common Ancestor for transition).
            this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE to PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO.");`.
            console.log("Transition action `` for PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE to PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO.");
            
            // Step 3: Enter/move towards transition target `PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO`.
            this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO
    ////////////////////////////////////////////////////////////////////////////////
    
    _PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO_ev1;
        
        // PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO behavior
        // uml: enter / { trace("Enter PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO."); }
        {
            // Step 1: execute action `trace("Enter PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO.");`
            console.log("Enter PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO.");
        } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO
    }
    
    _PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO_exit()
    {
        // PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO behavior
        // uml: exit / { trace("Exit PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO."); }
        {
            // Step 1: execute action `trace("Exit PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO.");`
            console.log("Exit PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO.");
        } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO behavior
        // uml: EV1 [trace_guard("State PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO: check behavior `EV1 TransitionTo(PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_YAM)`.", true)] / { trace("Transition action `` for PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO to PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_YAM."); } TransitionTo(PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_YAM)
        if (trace_guard("State PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO: check behavior `EV1 TransitionTo(PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_YAM)`.", true))
        {
            // Step 1: Exit states until we reach `PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG` state (Least Common Ancestor for transition).
            this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO to PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_YAM.");`.
            console.log("Transition action `` for PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO to PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_YAM.");
            
            // Step 3: Enter/move towards transition target `PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_YAM`.
            this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_YAM_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_YAM;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_YAM
    ////////////////////////////////////////////////////////////////////////////////
    
    _PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_YAM_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_YAM_exit;
        
        // PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_YAM behavior
        // uml: enter / { trace("Enter PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_YAM."); }
        {
            // Step 1: execute action `trace("Enter PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_YAM.");`
            console.log("Enter PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_YAM.");
        } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_YAM
    }
    
    _PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_YAM_exit()
    {
        // PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_YAM behavior
        // uml: exit / { trace("Exit PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_YAM."); }
        {
            // Step 1: execute action `trace("Exit PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_YAM.");`
            console.log("Exit PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_YAM.");
        } // end of behavior for PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_YAM
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST1_DO_EVENT_TESTING
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST1_DO_EVENT_TESTING_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST1_DO_EVENT_TESTING_exit;
        
        // TEST1_DO_EVENT_TESTING behavior
        // uml: enter / { trace("Enter TEST1_DO_EVENT_TESTING."); }
        {
            // Step 1: execute action `trace("Enter TEST1_DO_EVENT_TESTING.");`
            console.log("Enter TEST1_DO_EVENT_TESTING.");
        } // end of behavior for TEST1_DO_EVENT_TESTING
    }
    
    _TEST1_DO_EVENT_TESTING_exit()
    {
        // TEST1_DO_EVENT_TESTING behavior
        // uml: exit / { trace("Exit TEST1_DO_EVENT_TESTING."); }
        {
            // Step 1: execute action `trace("Exit TEST1_DO_EVENT_TESTING.");`
            console.log("Exit TEST1_DO_EVENT_TESTING.");
        } // end of behavior for TEST1_DO_EVENT_TESTING
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._ROOT_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST1_ROOT
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST1_ROOT_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST1_ROOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.DO] = this._TEST1_ROOT_do;
        
        // TEST1_ROOT behavior
        // uml: enter / { trace("Enter TEST1_ROOT."); }
        {
            // Step 1: execute action `trace("Enter TEST1_ROOT.");`
            console.log("Enter TEST1_ROOT.");
        } // end of behavior for TEST1_ROOT
    }
    
    _TEST1_ROOT_exit()
    {
        // TEST1_ROOT behavior
        // uml: exit / { trace("Exit TEST1_ROOT."); }
        {
            // Step 1: execute action `trace("Exit TEST1_ROOT.");`
            console.log("Exit TEST1_ROOT.");
        } // end of behavior for TEST1_ROOT
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST1_DO_EVENT_TESTING_exit;
        this._currentEventHandlers[Spec2Sm.EventId.DO] = null;  // no ancestor listens to this event
    }
    
    _TEST1_ROOT_do()
    {
        // No ancestor state handles `do` event.
        
        // TEST1_ROOT behavior
        // uml: do [trace_guard("State TEST1_ROOT: check behavior `do`.", true)]
        if (trace_guard("State TEST1_ROOT: check behavior `do`.", true))
        {
            // Step 1: execute action ``
            // Step 2: determine if ancestor gets to handle event next.
            // Don't consume special `do` event.
        } // end of behavior for TEST1_ROOT
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST1_S1
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST1_S1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST1_S1_exit;
        
        // TEST1_S1 behavior
        // uml: enter / { trace("Enter TEST1_S1."); }
        {
            // Step 1: execute action `trace("Enter TEST1_S1.");`
            console.log("Enter TEST1_S1.");
        } // end of behavior for TEST1_S1
    }
    
    _TEST1_S1_exit()
    {
        // TEST1_S1 behavior
        // uml: exit / { trace("Exit TEST1_S1."); }
        {
            // Step 1: execute action `trace("Exit TEST1_S1.");`
            console.log("Exit TEST1_S1.");
        } // end of behavior for TEST1_S1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST1_ROOT_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST1_S1_1
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST1_S1_1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST1_S1_1_exit;
        this._currentEventHandlers[Spec2Sm.EventId.DO] = this._TEST1_S1_1_do;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST1_S1_1_ev1;
        
        // TEST1_S1_1 behavior
        // uml: enter / { trace("Enter TEST1_S1_1."); }
        {
            // Step 1: execute action `trace("Enter TEST1_S1_1.");`
            console.log("Enter TEST1_S1_1.");
        } // end of behavior for TEST1_S1_1
        
        // TEST1_S1_1 behavior
        // uml: enter [trace_guard("State TEST1_S1_1: check behavior `enter / { clear_output(); }`.", true)] / { clear_output(); }
        if (trace_guard("State TEST1_S1_1: check behavior `enter / { clear_output(); }`.", true))
        {
            // Step 1: execute action `clear_output();`
            console.log("IGNORE_OUTPUT_BEFORE_THIS");;
        } // end of behavior for TEST1_S1_1
    }
    
    _TEST1_S1_1_exit()
    {
        // TEST1_S1_1 behavior
        // uml: exit / { trace("Exit TEST1_S1_1."); }
        {
            // Step 1: execute action `trace("Exit TEST1_S1_1.");`
            console.log("Exit TEST1_S1_1.");
        } // end of behavior for TEST1_S1_1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST1_S1_exit;
        this._currentEventHandlers[Spec2Sm.EventId.DO] = this._TEST1_ROOT_do;  // the next ancestor that handles this event is TEST1_ROOT
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _TEST1_S1_1_do()
    {
        // Setup handler for next ancestor that listens to `do` event.
        this._ancestorEventHandler = this._TEST1_ROOT_do;
        
        // TEST1_S1_1 behavior
        // uml: do [trace_guard("State TEST1_S1_1: check behavior `do`.", true)]
        if (trace_guard("State TEST1_S1_1: check behavior `do`.", true))
        {
            // Step 1: execute action ``
            // Step 2: determine if ancestor gets to handle event next.
            // Don't consume special `do` event.
        } // end of behavior for TEST1_S1_1
    }
    
    _TEST1_S1_1_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // TEST1_S1_1 behavior
        // uml: EV1 [trace_guard("State TEST1_S1_1: check behavior `EV1 TransitionTo(TEST1_S2)`.", true)] / { trace("Transition action `` for TEST1_S1_1 to TEST1_S2."); } TransitionTo(TEST1_S2)
        if (trace_guard("State TEST1_S1_1: check behavior `EV1 TransitionTo(TEST1_S2)`.", true))
        {
            // Step 1: Exit states until we reach `TEST1_ROOT` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._TEST1_ROOT_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for TEST1_S1_1 to TEST1_S2.");`.
            console.log("Transition action `` for TEST1_S1_1 to TEST1_S2.");
            
            // Step 3: Enter/move towards transition target `TEST1_S2`.
            this._TEST1_S2_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST1_S2;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for TEST1_S1_1
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST1_S2
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST1_S2_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST1_S2_exit;
        this._currentEventHandlers[Spec2Sm.EventId.DO] = this._TEST1_S2_do;
        
        // TEST1_S2 behavior
        // uml: enter / { trace("Enter TEST1_S2."); }
        {
            // Step 1: execute action `trace("Enter TEST1_S2.");`
            console.log("Enter TEST1_S2.");
        } // end of behavior for TEST1_S2
    }
    
    _TEST1_S2_exit()
    {
        // TEST1_S2 behavior
        // uml: exit / { trace("Exit TEST1_S2."); }
        {
            // Step 1: execute action `trace("Exit TEST1_S2.");`
            console.log("Exit TEST1_S2.");
        } // end of behavior for TEST1_S2
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST1_ROOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.DO] = this._TEST1_ROOT_do;  // the next ancestor that handles this event is TEST1_ROOT
    }
    
    _TEST1_S2_do()
    {
        // Setup handler for next ancestor that listens to `do` event.
        this._ancestorEventHandler = this._TEST1_ROOT_do;
        
        // TEST1_S2 behavior
        // uml: do [trace_guard("State TEST1_S2: check behavior `do / { consume_event = true; }`.", true)] / { consume_event = true; }
        if (trace_guard("State TEST1_S2: check behavior `do / { consume_event = true; }`.", true))
        {
            let consume_event = false; // the `do` event is special in that it normally is not consumed.
            
            // Step 1: execute action `consume_event = true;`
            consume_event = true;
            
            // Step 2: determine if ancestor gets to handle event next.
            if (consume_event)
            {
                this._ancestorEventHandler = null;  // consume event
            }
        } // end of behavior for TEST1_S2
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST10_CHOICE_POINT
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST10_CHOICE_POINT_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST10_CHOICE_POINT_exit;
        
        // TEST10_CHOICE_POINT behavior
        // uml: enter / { trace("Enter TEST10_CHOICE_POINT."); }
        {
            // Step 1: execute action `trace("Enter TEST10_CHOICE_POINT.");`
            console.log("Enter TEST10_CHOICE_POINT.");
        } // end of behavior for TEST10_CHOICE_POINT
    }
    
    _TEST10_CHOICE_POINT_exit()
    {
        // TEST10_CHOICE_POINT behavior
        // uml: exit / { trace("Exit TEST10_CHOICE_POINT."); }
        {
            // Step 1: execute action `trace("Exit TEST10_CHOICE_POINT.");`
            console.log("Exit TEST10_CHOICE_POINT.");
        } // end of behavior for TEST10_CHOICE_POINT
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._ROOT_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST10_A
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST10_A_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST10_A_exit;
        
        // TEST10_A behavior
        // uml: enter / { trace("Enter TEST10_A."); }
        {
            // Step 1: execute action `trace("Enter TEST10_A.");`
            console.log("Enter TEST10_A.");
        } // end of behavior for TEST10_A
    }
    
    _TEST10_A_exit()
    {
        // TEST10_A behavior
        // uml: exit / { trace("Exit TEST10_A."); }
        {
            // Step 1: execute action `trace("Exit TEST10_A.");`
            console.log("Exit TEST10_A.");
        } // end of behavior for TEST10_A
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST10_CHOICE_POINT_exit;
    }
    
    _TEST10_A_ChoicePoint__transition()
    {
        // TEST10_A.ChoicePoint() behavior
        // uml: [count == 1] / { trace("Transition action `` for TEST10_A.ChoicePoint() to TEST10_A.ChoicePoint()."); } TransitionTo(TEST10_A.ChoicePoint())
        if (this.vars.count == 1)
        {
            // Step 1: Exit states until we reach `TEST10_A` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for TEST10_A.ChoicePoint() to TEST10_A.ChoicePoint().");`.
            console.log("Transition action `` for TEST10_A.ChoicePoint() to TEST10_A.ChoicePoint().");
            
            // Step 3: Enter/move towards transition target `TEST10_A.ChoicePoint()`.
            // TEST10_A.ChoicePoint() is a pseudo state and cannot have an `enter` trigger.
            
            // Finish transition by calling pseudo state transition function.
            this._TEST10_A_ChoicePoint__transition_kid_index3();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for TEST10_A.ChoicePoint()
        
        // TEST10_A.ChoicePoint() behavior
        // uml: else / { trace("Transition action `` for TEST10_A.ChoicePoint() to TEST10_A.ChoicePoint()."); } TransitionTo(TEST10_A.ChoicePoint())
        {
            // Step 1: Exit states until we reach `TEST10_A` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for TEST10_A.ChoicePoint() to TEST10_A.ChoicePoint().");`.
            console.log("Transition action `` for TEST10_A.ChoicePoint() to TEST10_A.ChoicePoint().");
            
            // Step 3: Enter/move towards transition target `TEST10_A.ChoicePoint()`.
            // TEST10_A.ChoicePoint() is a pseudo state and cannot have an `enter` trigger.
            
            // Finish transition by calling pseudo state transition function.
            this._TEST10_A_ChoicePoint__transition_kid_index3();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for TEST10_A.ChoicePoint()
    }
    
    _TEST10_A_ChoicePoint__transition_kid_index3()
    {
        // TEST10_A.ChoicePoint() behavior
        // uml: [count == 1] / { trace("Transition action `` for TEST10_A.ChoicePoint() to TEST10_A.ChoicePoint(a)."); } TransitionTo(TEST10_A.ChoicePoint(a))
        if (this.vars.count == 1)
        {
            // Step 1: Exit states until we reach `TEST10_A` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for TEST10_A.ChoicePoint() to TEST10_A.ChoicePoint(a).");`.
            console.log("Transition action `` for TEST10_A.ChoicePoint() to TEST10_A.ChoicePoint(a).");
            
            // Step 3: Enter/move towards transition target `TEST10_A.ChoicePoint(a)`.
            // TEST10_A.ChoicePoint(a) is a pseudo state and cannot have an `enter` trigger.
            
            // Finish transition by calling pseudo state transition function.
            this._TEST10_A_ChoicePoint_a__transition();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for TEST10_A.ChoicePoint()
        
        // TEST10_A.ChoicePoint() behavior
        // uml: else / { trace("Transition action `` for TEST10_A.ChoicePoint() to TEST10_A.ChoicePoint(a)."); } TransitionTo(TEST10_A.ChoicePoint(a))
        {
            // Step 1: Exit states until we reach `TEST10_A` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for TEST10_A.ChoicePoint() to TEST10_A.ChoicePoint(a).");`.
            console.log("Transition action `` for TEST10_A.ChoicePoint() to TEST10_A.ChoicePoint(a).");
            
            // Step 3: Enter/move towards transition target `TEST10_A.ChoicePoint(a)`.
            // TEST10_A.ChoicePoint(a) is a pseudo state and cannot have an `enter` trigger.
            
            // Finish transition by calling pseudo state transition function.
            this._TEST10_A_ChoicePoint_a__transition();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for TEST10_A.ChoicePoint()
    }
    
    _TEST10_A_ChoicePoint_a__transition()
    {
        // TEST10_A.ChoicePoint(a) behavior
        // uml: [count == 1] / { trace("Transition action `` for TEST10_A.ChoicePoint(a) to TEST10_A.ChoicePoint(a)."); } TransitionTo(TEST10_A.ChoicePoint(a))
        if (this.vars.count == 1)
        {
            // Step 1: Exit states until we reach `TEST10_A` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for TEST10_A.ChoicePoint(a) to TEST10_A.ChoicePoint(a).");`.
            console.log("Transition action `` for TEST10_A.ChoicePoint(a) to TEST10_A.ChoicePoint(a).");
            
            // Step 3: Enter/move towards transition target `TEST10_A.ChoicePoint(a)`.
            // TEST10_A.ChoicePoint(a) is a pseudo state and cannot have an `enter` trigger.
            
            // Finish transition by calling pseudo state transition function.
            this._TEST10_A_ChoicePoint_a__transition_kid_index5();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for TEST10_A.ChoicePoint(a)
        
        // TEST10_A.ChoicePoint(a) behavior
        // uml: else / { trace("Transition action `` for TEST10_A.ChoicePoint(a) to TEST10_A.ChoicePoint(a)."); } TransitionTo(TEST10_A.ChoicePoint(a))
        {
            // Step 1: Exit states until we reach `TEST10_A` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for TEST10_A.ChoicePoint(a) to TEST10_A.ChoicePoint(a).");`.
            console.log("Transition action `` for TEST10_A.ChoicePoint(a) to TEST10_A.ChoicePoint(a).");
            
            // Step 3: Enter/move towards transition target `TEST10_A.ChoicePoint(a)`.
            // TEST10_A.ChoicePoint(a) is a pseudo state and cannot have an `enter` trigger.
            
            // Finish transition by calling pseudo state transition function.
            this._TEST10_A_ChoicePoint_a__transition_kid_index5();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for TEST10_A.ChoicePoint(a)
    }
    
    _TEST10_A_ChoicePoint_a__transition_kid_index5()
    {
        // TEST10_A.ChoicePoint(a) behavior
        // uml: / { trace("Transition action `` for TEST10_A.ChoicePoint(a) to TEST10_A_1."); } TransitionTo(TEST10_A_1)
        {
            // Step 1: Exit states until we reach `TEST10_A` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for TEST10_A.ChoicePoint(a) to TEST10_A_1.");`.
            console.log("Transition action `` for TEST10_A.ChoicePoint(a) to TEST10_A_1.");
            
            // Step 3: Enter/move towards transition target `TEST10_A_1`.
            this._TEST10_A_1_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST10_A_1;
            this._ancestorEventHandler = null;
            return;
        } // end of behavior for TEST10_A.ChoicePoint(a)
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST10_A_1
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST10_A_1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST10_A_1_exit;
        
        // TEST10_A_1 behavior
        // uml: enter / { trace("Enter TEST10_A_1."); }
        {
            // Step 1: execute action `trace("Enter TEST10_A_1.");`
            console.log("Enter TEST10_A_1.");
        } // end of behavior for TEST10_A_1
    }
    
    _TEST10_A_1_exit()
    {
        // TEST10_A_1 behavior
        // uml: exit / { trace("Exit TEST10_A_1."); }
        {
            // Step 1: execute action `trace("Exit TEST10_A_1.");`
            console.log("Exit TEST10_A_1.");
        } // end of behavior for TEST10_A_1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST10_A_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST10_ROOT
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST10_ROOT_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST10_ROOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV5] = this._TEST10_ROOT_ev5;
        
        // TEST10_ROOT behavior
        // uml: enter / { trace("Enter TEST10_ROOT."); }
        {
            // Step 1: execute action `trace("Enter TEST10_ROOT.");`
            console.log("Enter TEST10_ROOT.");
        } // end of behavior for TEST10_ROOT
    }
    
    _TEST10_ROOT_exit()
    {
        // TEST10_ROOT behavior
        // uml: exit / { trace("Exit TEST10_ROOT."); }
        {
            // Step 1: execute action `trace("Exit TEST10_ROOT.");`
            console.log("Exit TEST10_ROOT.");
        } // end of behavior for TEST10_ROOT
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST10_CHOICE_POINT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV5] = null;  // no ancestor listens to this event
    }
    
    _TEST10_ROOT_ev5()
    {
        // No ancestor state handles `ev5` event.
        
        // TEST10_ROOT behavior
        // uml: EV5 [trace_guard("State TEST10_ROOT: check behavior `EV5 / { count++; }`.", true)] / { count++; }
        if (trace_guard("State TEST10_ROOT: check behavior `EV5 / { count++; }`.", true))
        {
            // Step 1: execute action `count++;`
            this.vars.count++;
            
            // Step 2: determine if ancestor gets to handle event next.
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
        } // end of behavior for TEST10_ROOT
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST10_G
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST10_G_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST10_G_exit;
        
        // TEST10_G behavior
        // uml: enter / { trace("Enter TEST10_G."); }
        {
            // Step 1: execute action `trace("Enter TEST10_G.");`
            console.log("Enter TEST10_G.");
        } // end of behavior for TEST10_G
    }
    
    _TEST10_G_exit()
    {
        // TEST10_G behavior
        // uml: exit / { trace("Exit TEST10_G."); }
        {
            // Step 1: execute action `trace("Exit TEST10_G.");`
            console.log("Exit TEST10_G.");
        } // end of behavior for TEST10_G
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST10_ROOT_exit;
    }
    
    _TEST10_G_ChoicePoint__transition()
    {
        // TEST10_G.ChoicePoint() behavior
        // uml: / { trace("Transition action `` for TEST10_G.ChoicePoint() to TEST10_G.ChoicePoint(1)."); } TransitionTo(TEST10_G.ChoicePoint(1))
        {
            // Step 1: Exit states until we reach `TEST10_G` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for TEST10_G.ChoicePoint() to TEST10_G.ChoicePoint(1).");`.
            console.log("Transition action `` for TEST10_G.ChoicePoint() to TEST10_G.ChoicePoint(1).");
            
            // Step 3: Enter/move towards transition target `TEST10_G.ChoicePoint(1)`.
            // TEST10_G.ChoicePoint(1) is a pseudo state and cannot have an `enter` trigger.
            
            // TEST10_G.ChoicePoint(1) behavior
            // uml: 1. [count <= 0] / { trace("Transition action `` for TEST10_G.ChoicePoint(1) to TEST10_G_S0."); } TransitionTo(TEST10_G_S0)
            if (this.vars.count <= 0)
            {
                // Step 1: Exit states until we reach `TEST10_G` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for TEST10_G.ChoicePoint(1) to TEST10_G_S0.");`.
                console.log("Transition action `` for TEST10_G.ChoicePoint(1) to TEST10_G_S0.");
                
                // Step 3: Enter/move towards transition target `TEST10_G_S0`.
                this._TEST10_G_S0_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.TEST10_G_S0;
                this._ancestorEventHandler = null;
                return;
            } // end of behavior for TEST10_G.ChoicePoint(1)
            
            // TEST10_G.ChoicePoint(1) behavior
            // uml: [count <= 2] / { trace("Transition action `` for TEST10_G.ChoicePoint(1) to TEST10_G.ChoicePoint(lower)."); } TransitionTo(TEST10_G.ChoicePoint(lower))
            if (this.vars.count <= 2)
            {
                // Step 1: Exit states until we reach `TEST10_G` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for TEST10_G.ChoicePoint(1) to TEST10_G.ChoicePoint(lower).");`.
                console.log("Transition action `` for TEST10_G.ChoicePoint(1) to TEST10_G.ChoicePoint(lower).");
                
                // Step 3: Enter/move towards transition target `TEST10_G.ChoicePoint(lower)`.
                // TEST10_G.ChoicePoint(lower) is a pseudo state and cannot have an `enter` trigger.
                
                // TEST10_G.ChoicePoint(lower) behavior
                // uml: [count <=1] / { trace("Transition action `` for TEST10_G.ChoicePoint(lower) to TEST10_G_S1."); } TransitionTo(TEST10_G_S1)
                if (this.vars.count <=1)
                {
                    // Step 1: Exit states until we reach `TEST10_G` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                    
                    // Step 2: Transition action: `trace("Transition action `` for TEST10_G.ChoicePoint(lower) to TEST10_G_S1.");`.
                    console.log("Transition action `` for TEST10_G.ChoicePoint(lower) to TEST10_G_S1.");
                    
                    // Step 3: Enter/move towards transition target `TEST10_G_S1`.
                    this._TEST10_G_S1_enter();
                    
                    // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                    this.stateId = Spec2Sm.StateId.TEST10_G_S1;
                    this._ancestorEventHandler = null;
                    return;
                } // end of behavior for TEST10_G.ChoicePoint(lower)
                
                // TEST10_G.ChoicePoint(lower) behavior
                // uml: else / { trace("Transition action `` for TEST10_G.ChoicePoint(lower) to TEST10_G_S2."); } TransitionTo(TEST10_G_S2)
                {
                    // Step 1: Exit states until we reach `TEST10_G` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                    
                    // Step 2: Transition action: `trace("Transition action `` for TEST10_G.ChoicePoint(lower) to TEST10_G_S2.");`.
                    console.log("Transition action `` for TEST10_G.ChoicePoint(lower) to TEST10_G_S2.");
                    
                    // Step 3: Enter/move towards transition target `TEST10_G_S2`.
                    this._TEST10_G_S2_enter();
                    
                    // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                    this.stateId = Spec2Sm.StateId.TEST10_G_S2;
                    this._ancestorEventHandler = null;
                    return;
                } // end of behavior for TEST10_G.ChoicePoint(lower)
            } // end of behavior for TEST10_G.ChoicePoint(1)
            
            // TEST10_G.ChoicePoint(1) behavior
            // uml: else / { trace("Transition action `` for TEST10_G.ChoicePoint(1) to TEST10_G.ChoicePoint(upper)."); } TransitionTo(TEST10_G.ChoicePoint(upper))
            {
                // Step 1: Exit states until we reach `TEST10_G` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for TEST10_G.ChoicePoint(1) to TEST10_G.ChoicePoint(upper).");`.
                console.log("Transition action `` for TEST10_G.ChoicePoint(1) to TEST10_G.ChoicePoint(upper).");
                
                // Step 3: Enter/move towards transition target `TEST10_G.ChoicePoint(upper)`.
                // TEST10_G.ChoicePoint(upper) is a pseudo state and cannot have an `enter` trigger.
                
                // TEST10_G.ChoicePoint(upper) behavior
                // uml: [count <= 3] / { trace("Transition action `` for TEST10_G.ChoicePoint(upper) to TEST10_G_S3."); } TransitionTo(TEST10_G_S3)
                if (this.vars.count <= 3)
                {
                    // Step 1: Exit states until we reach `TEST10_G` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                    
                    // Step 2: Transition action: `trace("Transition action `` for TEST10_G.ChoicePoint(upper) to TEST10_G_S3.");`.
                    console.log("Transition action `` for TEST10_G.ChoicePoint(upper) to TEST10_G_S3.");
                    
                    // Step 3: Enter/move towards transition target `TEST10_G_S3`.
                    this._TEST10_G_S3_enter();
                    
                    // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                    this.stateId = Spec2Sm.StateId.TEST10_G_S3;
                    this._ancestorEventHandler = null;
                    return;
                } // end of behavior for TEST10_G.ChoicePoint(upper)
                
                // TEST10_G.ChoicePoint(upper) behavior
                // uml: else / { trace("Transition action `` for TEST10_G.ChoicePoint(upper) to TEST10_S4."); } TransitionTo(TEST10_S4)
                {
                    // Step 1: Exit states until we reach `TEST10_ROOT` state (Least Common Ancestor for transition).
                    this._ExitUpToStateHandler(this._TEST10_ROOT_exit);
                    
                    // Step 2: Transition action: `trace("Transition action `` for TEST10_G.ChoicePoint(upper) to TEST10_S4.");`.
                    console.log("Transition action `` for TEST10_G.ChoicePoint(upper) to TEST10_S4.");
                    
                    // Step 3: Enter/move towards transition target `TEST10_S4`.
                    this._TEST10_S4_enter();
                    
                    // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                    this.stateId = Spec2Sm.StateId.TEST10_S4;
                    this._ancestorEventHandler = null;
                    return;
                } // end of behavior for TEST10_G.ChoicePoint(upper)
            } // end of behavior for TEST10_G.ChoicePoint(1)
        } // end of behavior for TEST10_G.ChoicePoint()
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST10_G_S0
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST10_G_S0_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST10_G_S0_exit;
        
        // TEST10_G_S0 behavior
        // uml: enter / { trace("Enter TEST10_G_S0."); }
        {
            // Step 1: execute action `trace("Enter TEST10_G_S0.");`
            console.log("Enter TEST10_G_S0.");
        } // end of behavior for TEST10_G_S0
    }
    
    _TEST10_G_S0_exit()
    {
        // TEST10_G_S0 behavior
        // uml: exit / { trace("Exit TEST10_G_S0."); }
        {
            // Step 1: execute action `trace("Exit TEST10_G_S0.");`
            console.log("Exit TEST10_G_S0.");
        } // end of behavior for TEST10_G_S0
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST10_G_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST10_G_S1
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST10_G_S1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST10_G_S1_exit;
        
        // TEST10_G_S1 behavior
        // uml: enter / { trace("Enter TEST10_G_S1."); }
        {
            // Step 1: execute action `trace("Enter TEST10_G_S1.");`
            console.log("Enter TEST10_G_S1.");
        } // end of behavior for TEST10_G_S1
    }
    
    _TEST10_G_S1_exit()
    {
        // TEST10_G_S1 behavior
        // uml: exit / { trace("Exit TEST10_G_S1."); }
        {
            // Step 1: execute action `trace("Exit TEST10_G_S1.");`
            console.log("Exit TEST10_G_S1.");
        } // end of behavior for TEST10_G_S1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST10_G_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST10_G_S2
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST10_G_S2_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST10_G_S2_exit;
        
        // TEST10_G_S2 behavior
        // uml: enter / { trace("Enter TEST10_G_S2."); }
        {
            // Step 1: execute action `trace("Enter TEST10_G_S2.");`
            console.log("Enter TEST10_G_S2.");
        } // end of behavior for TEST10_G_S2
    }
    
    _TEST10_G_S2_exit()
    {
        // TEST10_G_S2 behavior
        // uml: exit / { trace("Exit TEST10_G_S2."); }
        {
            // Step 1: execute action `trace("Exit TEST10_G_S2.");`
            console.log("Exit TEST10_G_S2.");
        } // end of behavior for TEST10_G_S2
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST10_G_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST10_G_S3
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST10_G_S3_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST10_G_S3_exit;
        
        // TEST10_G_S3 behavior
        // uml: enter / { trace("Enter TEST10_G_S3."); }
        {
            // Step 1: execute action `trace("Enter TEST10_G_S3.");`
            console.log("Enter TEST10_G_S3.");
        } // end of behavior for TEST10_G_S3
    }
    
    _TEST10_G_S3_exit()
    {
        // TEST10_G_S3 behavior
        // uml: exit / { trace("Exit TEST10_G_S3."); }
        {
            // Step 1: execute action `trace("Exit TEST10_G_S3.");`
            console.log("Exit TEST10_G_S3.");
        } // end of behavior for TEST10_G_S3
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST10_G_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST10_S1
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST10_S1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST10_S1_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST10_S1_ev1;
        this._currentEventHandlers[Spec2Sm.EventId.EV10] = this._TEST10_S1_ev10;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = this._TEST10_S1_ev2;
        this._currentEventHandlers[Spec2Sm.EventId.EV3] = this._TEST10_S1_ev3;
        
        // TEST10_S1 behavior
        // uml: enter / { trace("Enter TEST10_S1."); }
        {
            // Step 1: execute action `trace("Enter TEST10_S1.");`
            console.log("Enter TEST10_S1.");
        } // end of behavior for TEST10_S1
        
        // TEST10_S1 behavior
        // uml: enter [trace_guard("State TEST10_S1: check behavior `enter / { clear_output(); }`.", true)] / { clear_output(); }
        if (trace_guard("State TEST10_S1: check behavior `enter / { clear_output(); }`.", true))
        {
            // Step 1: execute action `clear_output();`
            console.log("IGNORE_OUTPUT_BEFORE_THIS");;
        } // end of behavior for TEST10_S1
    }
    
    _TEST10_S1_exit()
    {
        // TEST10_S1 behavior
        // uml: exit / { trace("Exit TEST10_S1."); }
        {
            // Step 1: execute action `trace("Exit TEST10_S1.");`
            console.log("Exit TEST10_S1.");
        } // end of behavior for TEST10_S1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST10_ROOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV10] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV3] = null;  // no ancestor listens to this event
    }
    
    _TEST10_S1_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // TEST10_S1 behavior
        // uml: EV1 [trace_guard("State TEST10_S1: check behavior `EV1 TransitionTo(TEST10_G.EntryPoint(1))`.", true)] / { trace("Transition action `` for TEST10_S1 to TEST10_G.EntryPoint(1)."); } TransitionTo(TEST10_G.EntryPoint(1))
        if (trace_guard("State TEST10_S1: check behavior `EV1 TransitionTo(TEST10_G.EntryPoint(1))`.", true))
        {
            // Step 1: Exit states until we reach `TEST10_ROOT` state (Least Common Ancestor for transition).
            this._TEST10_S1_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST10_S1 to TEST10_G.EntryPoint(1).");`.
            console.log("Transition action `` for TEST10_S1 to TEST10_G.EntryPoint(1).");
            
            // Step 3: Enter/move towards transition target `TEST10_G.EntryPoint(1)`.
            this._TEST10_G_enter();
            // TEST10_G.EntryPoint(1) is a pseudo state and cannot have an `enter` trigger.
            
            // TEST10_G.EntryPoint(1) behavior
            // uml: / { trace("Transition action `` for TEST10_G.EntryPoint(1) to TEST10_G.ChoicePoint()."); } TransitionTo(TEST10_G.ChoicePoint())
            {
                // Step 1: Exit states until we reach `TEST10_G` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for TEST10_G.EntryPoint(1) to TEST10_G.ChoicePoint().");`.
                console.log("Transition action `` for TEST10_G.EntryPoint(1) to TEST10_G.ChoicePoint().");
                
                // Step 3: Enter/move towards transition target `TEST10_G.ChoicePoint()`.
                // TEST10_G.ChoicePoint() is a pseudo state and cannot have an `enter` trigger.
                
                // Finish transition by calling pseudo state transition function.
                this._TEST10_G_ChoicePoint__transition();
                return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
            } // end of behavior for TEST10_G.EntryPoint(1)
        } // end of behavior for TEST10_S1
    }
    
    _TEST10_S1_ev10()
    {
        // No ancestor state handles `ev10` event.
        
        // TEST10_S1 behavior
        // uml: EV10 [trace_guard("State TEST10_S1: check behavior `EV10 TransitionTo(TEST10_A)`.", true)] / { trace("Transition action `` for TEST10_S1 to TEST10_A."); } TransitionTo(TEST10_A)
        if (trace_guard("State TEST10_S1: check behavior `EV10 TransitionTo(TEST10_A)`.", true))
        {
            // Step 1: Exit states until we reach `TEST10_CHOICE_POINT` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._TEST10_CHOICE_POINT_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for TEST10_S1 to TEST10_A.");`.
            console.log("Transition action `` for TEST10_S1 to TEST10_A.");
            
            // Step 3: Enter/move towards transition target `TEST10_A`.
            this._TEST10_A_enter();
            
            // TEST10_A.InitialState behavior
            // uml: [count == 1] / { trace("Transition action `` for TEST10_A.InitialState to TEST10_A.ChoicePoint()."); } TransitionTo(TEST10_A.ChoicePoint())
            if (this.vars.count == 1)
            {
                // Step 1: Exit states until we reach `TEST10_A` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for TEST10_A.InitialState to TEST10_A.ChoicePoint().");`.
                console.log("Transition action `` for TEST10_A.InitialState to TEST10_A.ChoicePoint().");
                
                // Step 3: Enter/move towards transition target `TEST10_A.ChoicePoint()`.
                // TEST10_A.ChoicePoint() is a pseudo state and cannot have an `enter` trigger.
                
                // Finish transition by calling pseudo state transition function.
                this._TEST10_A_ChoicePoint__transition();
                return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
            } // end of behavior for TEST10_A.InitialState
            
            // TEST10_A.InitialState behavior
            // uml: [count == 0] / { trace("Transition action `count++;` for TEST10_A.InitialState to TEST10_A.ChoicePoint().");\ncount++; } TransitionTo(TEST10_A.ChoicePoint())
            if (this.vars.count == 0)
            {
                // Step 1: Exit states until we reach `TEST10_A` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `count++;` for TEST10_A.InitialState to TEST10_A.ChoicePoint().");\ncount++;`.
                console.log("Transition action `count++;` for TEST10_A.InitialState to TEST10_A.ChoicePoint().");
                this.vars.count++;
                
                // Step 3: Enter/move towards transition target `TEST10_A.ChoicePoint()`.
                // TEST10_A.ChoicePoint() is a pseudo state and cannot have an `enter` trigger.
                
                // Finish transition by calling pseudo state transition function.
                this._TEST10_A_ChoicePoint__transition();
                return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
            } // end of behavior for TEST10_A.InitialState
            
            // TEST10_A.InitialState behavior
            // uml: else / { trace("Transition action `` for TEST10_A.InitialState to TEST10_A.ChoicePoint()."); } TransitionTo(TEST10_A.ChoicePoint())
            {
                // Step 1: Exit states until we reach `TEST10_A` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for TEST10_A.InitialState to TEST10_A.ChoicePoint().");`.
                console.log("Transition action `` for TEST10_A.InitialState to TEST10_A.ChoicePoint().");
                
                // Step 3: Enter/move towards transition target `TEST10_A.ChoicePoint()`.
                // TEST10_A.ChoicePoint() is a pseudo state and cannot have an `enter` trigger.
                
                // Finish transition by calling pseudo state transition function.
                this._TEST10_A_ChoicePoint__transition_kid_index3();
                return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
            } // end of behavior for TEST10_A.InitialState
        } // end of behavior for TEST10_S1
    }
    
    _TEST10_S1_ev2()
    {
        // No ancestor state handles `ev2` event.
        
        // TEST10_S1 behavior
        // uml: EV2 [trace_guard("State TEST10_S1: check behavior `EV2 TransitionTo(TEST10_G.ChoicePoint())`.", true)] / { trace("Transition action `` for TEST10_S1 to TEST10_G.ChoicePoint()."); } TransitionTo(TEST10_G.ChoicePoint())
        if (trace_guard("State TEST10_S1: check behavior `EV2 TransitionTo(TEST10_G.ChoicePoint())`.", true))
        {
            // Step 1: Exit states until we reach `TEST10_ROOT` state (Least Common Ancestor for transition).
            this._TEST10_S1_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST10_S1 to TEST10_G.ChoicePoint().");`.
            console.log("Transition action `` for TEST10_S1 to TEST10_G.ChoicePoint().");
            
            // Step 3: Enter/move towards transition target `TEST10_G.ChoicePoint()`.
            this._TEST10_G_enter();
            // TEST10_G.ChoicePoint() is a pseudo state and cannot have an `enter` trigger.
            
            // Finish transition by calling pseudo state transition function.
            this._TEST10_G_ChoicePoint__transition();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for TEST10_S1
    }
    
    _TEST10_S1_ev3()
    {
        // No ancestor state handles `ev3` event.
        
        // TEST10_S1 behavior
        // uml: EV3 [trace_guard("State TEST10_S1: check behavior `EV3 TransitionTo(TEST10_G)`.", true)] / { trace("Transition action `` for TEST10_S1 to TEST10_G."); } TransitionTo(TEST10_G)
        if (trace_guard("State TEST10_S1: check behavior `EV3 TransitionTo(TEST10_G)`.", true))
        {
            // Step 1: Exit states until we reach `TEST10_ROOT` state (Least Common Ancestor for transition).
            this._TEST10_S1_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST10_S1 to TEST10_G.");`.
            console.log("Transition action `` for TEST10_S1 to TEST10_G.");
            
            // Step 3: Enter/move towards transition target `TEST10_G`.
            this._TEST10_G_enter();
            
            // TEST10_G.InitialState behavior
            // uml: / { trace("Transition action `` for TEST10_G.InitialState to TEST10_G.ChoicePoint()."); } TransitionTo(TEST10_G.ChoicePoint())
            {
                // Step 1: Exit states until we reach `TEST10_G` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for TEST10_G.InitialState to TEST10_G.ChoicePoint().");`.
                console.log("Transition action `` for TEST10_G.InitialState to TEST10_G.ChoicePoint().");
                
                // Step 3: Enter/move towards transition target `TEST10_G.ChoicePoint()`.
                // TEST10_G.ChoicePoint() is a pseudo state and cannot have an `enter` trigger.
                
                // Finish transition by calling pseudo state transition function.
                this._TEST10_G_ChoicePoint__transition();
                return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
            } // end of behavior for TEST10_G.InitialState
        } // end of behavior for TEST10_S1
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST10_S4
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST10_S4_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST10_S4_exit;
        
        // TEST10_S4 behavior
        // uml: enter / { trace("Enter TEST10_S4."); }
        {
            // Step 1: execute action `trace("Enter TEST10_S4.");`
            console.log("Enter TEST10_S4.");
        } // end of behavior for TEST10_S4
    }
    
    _TEST10_S4_exit()
    {
        // TEST10_S4 behavior
        // uml: exit / { trace("Exit TEST10_S4."); }
        {
            // Step 1: execute action `trace("Exit TEST10_S4.");`
            console.log("Exit TEST10_S4.");
        } // end of behavior for TEST10_S4
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST10_ROOT_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST2_REGULAR_EVENT_TESTING
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST2_REGULAR_EVENT_TESTING_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST2_REGULAR_EVENT_TESTING_exit;
        
        // TEST2_REGULAR_EVENT_TESTING behavior
        // uml: enter / { trace("Enter TEST2_REGULAR_EVENT_TESTING."); }
        {
            // Step 1: execute action `trace("Enter TEST2_REGULAR_EVENT_TESTING.");`
            console.log("Enter TEST2_REGULAR_EVENT_TESTING.");
        } // end of behavior for TEST2_REGULAR_EVENT_TESTING
    }
    
    _TEST2_REGULAR_EVENT_TESTING_exit()
    {
        // TEST2_REGULAR_EVENT_TESTING behavior
        // uml: exit / { trace("Exit TEST2_REGULAR_EVENT_TESTING."); }
        {
            // Step 1: execute action `trace("Exit TEST2_REGULAR_EVENT_TESTING.");`
            console.log("Exit TEST2_REGULAR_EVENT_TESTING.");
        } // end of behavior for TEST2_REGULAR_EVENT_TESTING
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._ROOT_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST2_ROOT
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST2_ROOT_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST2_ROOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.DO] = this._TEST2_ROOT_do;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST2_ROOT_ev1;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = this._TEST2_ROOT_ev2;
        
        // TEST2_ROOT behavior
        // uml: enter / { trace("Enter TEST2_ROOT."); }
        {
            // Step 1: execute action `trace("Enter TEST2_ROOT.");`
            console.log("Enter TEST2_ROOT.");
        } // end of behavior for TEST2_ROOT
    }
    
    _TEST2_ROOT_exit()
    {
        // TEST2_ROOT behavior
        // uml: exit / { trace("Exit TEST2_ROOT."); }
        {
            // Step 1: execute action `trace("Exit TEST2_ROOT.");`
            console.log("Exit TEST2_ROOT.");
        } // end of behavior for TEST2_ROOT
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST2_REGULAR_EVENT_TESTING_exit;
        this._currentEventHandlers[Spec2Sm.EventId.DO] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = null;  // no ancestor listens to this event
    }
    
    _TEST2_ROOT_do()
    {
        // No ancestor state handles `do` event.
        
        // TEST2_ROOT behavior
        // uml: do [trace_guard("State TEST2_ROOT: check behavior `do`.", true)]
        if (trace_guard("State TEST2_ROOT: check behavior `do`.", true))
        {
            // Step 1: execute action ``
            // Step 2: determine if ancestor gets to handle event next.
            // Don't consume special `do` event.
        } // end of behavior for TEST2_ROOT
    }
    
    _TEST2_ROOT_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // TEST2_ROOT behavior
        // uml: EV1 [trace_guard("State TEST2_ROOT: check behavior `EV1`.", true)]
        if (trace_guard("State TEST2_ROOT: check behavior `EV1`.", true))
        {
            // Step 1: execute action ``
            // Step 2: determine if ancestor gets to handle event next.
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
        } // end of behavior for TEST2_ROOT
    }
    
    _TEST2_ROOT_ev2()
    {
        // No ancestor state handles `ev2` event.
        
        // TEST2_ROOT behavior
        // uml: EV2 [trace_guard("State TEST2_ROOT: check behavior `EV2`.", true)]
        if (trace_guard("State TEST2_ROOT: check behavior `EV2`.", true))
        {
            // Step 1: execute action ``
            // Step 2: determine if ancestor gets to handle event next.
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
        } // end of behavior for TEST2_ROOT
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST2_S1
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST2_S1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST2_S1_exit;
        
        // TEST2_S1 behavior
        // uml: enter / { trace("Enter TEST2_S1."); }
        {
            // Step 1: execute action `trace("Enter TEST2_S1.");`
            console.log("Enter TEST2_S1.");
        } // end of behavior for TEST2_S1
    }
    
    _TEST2_S1_exit()
    {
        // TEST2_S1 behavior
        // uml: exit / { trace("Exit TEST2_S1."); }
        {
            // Step 1: execute action `trace("Exit TEST2_S1.");`
            console.log("Exit TEST2_S1.");
        } // end of behavior for TEST2_S1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST2_ROOT_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST2_S1_1
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST2_S1_1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST2_S1_1_exit;
        this._currentEventHandlers[Spec2Sm.EventId.DO] = this._TEST2_S1_1_do;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST2_S1_1_ev1;
        
        // TEST2_S1_1 behavior
        // uml: enter / { trace("Enter TEST2_S1_1."); }
        {
            // Step 1: execute action `trace("Enter TEST2_S1_1.");`
            console.log("Enter TEST2_S1_1.");
        } // end of behavior for TEST2_S1_1
        
        // TEST2_S1_1 behavior
        // uml: enter [trace_guard("State TEST2_S1_1: check behavior `enter / { clear_output(); }`.", true)] / { clear_output(); }
        if (trace_guard("State TEST2_S1_1: check behavior `enter / { clear_output(); }`.", true))
        {
            // Step 1: execute action `clear_output();`
            console.log("IGNORE_OUTPUT_BEFORE_THIS");;
        } // end of behavior for TEST2_S1_1
    }
    
    _TEST2_S1_1_exit()
    {
        // TEST2_S1_1 behavior
        // uml: exit / { trace("Exit TEST2_S1_1."); }
        {
            // Step 1: execute action `trace("Exit TEST2_S1_1.");`
            console.log("Exit TEST2_S1_1.");
        } // end of behavior for TEST2_S1_1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST2_S1_exit;
        this._currentEventHandlers[Spec2Sm.EventId.DO] = this._TEST2_ROOT_do;  // the next ancestor that handles this event is TEST2_ROOT
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST2_ROOT_ev1;  // the next ancestor that handles this event is TEST2_ROOT
    }
    
    _TEST2_S1_1_do()
    {
        // Setup handler for next ancestor that listens to `do` event.
        this._ancestorEventHandler = this._TEST2_ROOT_do;
        
        // TEST2_S1_1 behavior
        // uml: do [trace_guard("State TEST2_S1_1: check behavior `do TransitionTo(TEST2_S2)`.", true)] / { trace("Transition action `` for TEST2_S1_1 to TEST2_S2."); } TransitionTo(TEST2_S2)
        if (trace_guard("State TEST2_S1_1: check behavior `do TransitionTo(TEST2_S2)`.", true))
        {
            // Step 1: Exit states until we reach `TEST2_ROOT` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._TEST2_ROOT_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for TEST2_S1_1 to TEST2_S2.");`.
            console.log("Transition action `` for TEST2_S1_1 to TEST2_S2.");
            
            // Step 3: Enter/move towards transition target `TEST2_S2`.
            this._TEST2_S2_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST2_S2;
            this._ancestorEventHandler = null;
            return;
        } // end of behavior for TEST2_S1_1
    }
    
    _TEST2_S1_1_ev1()
    {
        // Setup handler for next ancestor that listens to `ev1` event.
        this._ancestorEventHandler = this._TEST2_ROOT_ev1;
        
        // TEST2_S1_1 behavior
        // uml: EV1 [trace_guard("State TEST2_S1_1: check behavior `EV1`.", true)]
        if (trace_guard("State TEST2_S1_1: check behavior `EV1`.", true))
        {
            // Step 1: execute action ``
            // Step 2: determine if ancestor gets to handle event next.
            this._ancestorEventHandler = null;  // consume event
        } // end of behavior for TEST2_S1_1
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST2_S2
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST2_S2_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST2_S2_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST2_S2_ev1;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = this._TEST2_S2_ev2;
        
        // TEST2_S2 behavior
        // uml: enter / { trace("Enter TEST2_S2."); }
        {
            // Step 1: execute action `trace("Enter TEST2_S2.");`
            console.log("Enter TEST2_S2.");
        } // end of behavior for TEST2_S2
        
        // TEST2_S2 behavior
        // uml: ENTER [trace_guard("State TEST2_S2: check behavior `ENTER`.", true)]
        if (trace_guard("State TEST2_S2: check behavior `ENTER`.", true))
        {
            // Step 1: execute action ``
        } // end of behavior for TEST2_S2
    }
    
    _TEST2_S2_exit()
    {
        // TEST2_S2 behavior
        // uml: exit / { trace("Exit TEST2_S2."); }
        {
            // Step 1: execute action `trace("Exit TEST2_S2.");`
            console.log("Exit TEST2_S2.");
        } // end of behavior for TEST2_S2
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST2_ROOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST2_ROOT_ev1;  // the next ancestor that handles this event is TEST2_ROOT
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = this._TEST2_ROOT_ev2;  // the next ancestor that handles this event is TEST2_ROOT
    }
    
    _TEST2_S2_ev1()
    {
        // Setup handler for next ancestor that listens to `ev1` event.
        this._ancestorEventHandler = this._TEST2_ROOT_ev1;
        
        // TEST2_S2 behavior
        // uml: ev1 [trace_guard("State TEST2_S2: check behavior `ev1 / { consume_event = false; }`.", true)] / { consume_event = false; }
        if (trace_guard("State TEST2_S2: check behavior `ev1 / { consume_event = false; }`.", true))
        {
            let consume_event = true; // events other than `do` are normally consumed by any event handler. Other event handlers in *this* state may still handle the event though.
            
            // Step 1: execute action `consume_event = false;`
            consume_event = false;
            
            // Step 2: determine if ancestor gets to handle event next.
            if (consume_event)
            {
                this._ancestorEventHandler = null;  // consume event
            }
        } // end of behavior for TEST2_S2
    }
    
    _TEST2_S2_ev2()
    {
        // Setup handler for next ancestor that listens to `ev2` event.
        this._ancestorEventHandler = this._TEST2_ROOT_ev2;
        
        // TEST2_S2 behavior
        // uml: ev2 [trace_guard("State TEST2_S2: check behavior `ev2 TransitionTo(TEST2_S2)`.", true)] / { trace("Transition action `` for TEST2_S2 to TEST2_S2."); } TransitionTo(TEST2_S2)
        if (trace_guard("State TEST2_S2: check behavior `ev2 TransitionTo(TEST2_S2)`.", true))
        {
            // Step 1: Exit states until we reach `TEST2_ROOT` state (Least Common Ancestor for transition).
            this._TEST2_S2_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST2_S2 to TEST2_S2.");`.
            console.log("Transition action `` for TEST2_S2 to TEST2_S2.");
            
            // Step 3: Enter/move towards transition target `TEST2_S2`.
            this._TEST2_S2_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST2_S2;
            this._ancestorEventHandler = null;
            return;
        } // end of behavior for TEST2_S2
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST3_BEHAVIOR_ORDERING
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST3_BEHAVIOR_ORDERING_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST3_BEHAVIOR_ORDERING_exit;
        
        // TEST3_BEHAVIOR_ORDERING behavior
        // uml: enter / { trace("Enter TEST3_BEHAVIOR_ORDERING."); }
        {
            // Step 1: execute action `trace("Enter TEST3_BEHAVIOR_ORDERING.");`
            console.log("Enter TEST3_BEHAVIOR_ORDERING.");
        } // end of behavior for TEST3_BEHAVIOR_ORDERING
    }
    
    _TEST3_BEHAVIOR_ORDERING_exit()
    {
        // TEST3_BEHAVIOR_ORDERING behavior
        // uml: exit / { trace("Exit TEST3_BEHAVIOR_ORDERING."); }
        {
            // Step 1: execute action `trace("Exit TEST3_BEHAVIOR_ORDERING.");`
            console.log("Exit TEST3_BEHAVIOR_ORDERING.");
        } // end of behavior for TEST3_BEHAVIOR_ORDERING
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._ROOT_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST3_ROOT
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST3_ROOT_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST3_ROOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST3_ROOT_ev1;
        
        // TEST3_ROOT behavior
        // uml: enter / { trace("Enter TEST3_ROOT."); }
        {
            // Step 1: execute action `trace("Enter TEST3_ROOT.");`
            console.log("Enter TEST3_ROOT.");
        } // end of behavior for TEST3_ROOT
    }
    
    _TEST3_ROOT_exit()
    {
        // TEST3_ROOT behavior
        // uml: exit / { trace("Exit TEST3_ROOT."); }
        {
            // Step 1: execute action `trace("Exit TEST3_ROOT.");`
            console.log("Exit TEST3_ROOT.");
        } // end of behavior for TEST3_ROOT
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST3_BEHAVIOR_ORDERING_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _TEST3_ROOT_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // TEST3_ROOT behavior
        // uml: EV1 [trace_guard("State TEST3_ROOT: check behavior `EV1`.", true)]
        if (trace_guard("State TEST3_ROOT: check behavior `EV1`.", true))
        {
            // Step 1: execute action ``
            // Step 2: determine if ancestor gets to handle event next.
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
        } // end of behavior for TEST3_ROOT
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST3_S1
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST3_S1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST3_S1_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST3_S1_ev1;
        
        // TEST3_S1 behavior
        // uml: enter / { trace("Enter TEST3_S1."); }
        {
            // Step 1: execute action `trace("Enter TEST3_S1.");`
            console.log("Enter TEST3_S1.");
        } // end of behavior for TEST3_S1
        
        // TEST3_S1 behavior
        // uml: enter [trace_guard("State TEST3_S1: check behavior `enter / { clear_output(); }`.", true)] / { clear_output(); }
        if (trace_guard("State TEST3_S1: check behavior `enter / { clear_output(); }`.", true))
        {
            // Step 1: execute action `clear_output();`
            console.log("IGNORE_OUTPUT_BEFORE_THIS");;
        } // end of behavior for TEST3_S1
    }
    
    _TEST3_S1_exit()
    {
        // TEST3_S1 behavior
        // uml: exit / { trace("Exit TEST3_S1."); }
        {
            // Step 1: execute action `trace("Exit TEST3_S1.");`
            console.log("Exit TEST3_S1.");
        } // end of behavior for TEST3_S1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST3_ROOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST3_ROOT_ev1;  // the next ancestor that handles this event is TEST3_ROOT
    }
    
    _TEST3_S1_ev1()
    {
        // Setup handler for next ancestor that listens to `ev1` event.
        this._ancestorEventHandler = this._TEST3_ROOT_ev1;
        
        // TEST3_S1 behavior
        // uml: 1. EV1 [trace_guard("State TEST3_S1: check behavior `1. EV1 TransitionTo(TEST3_S2)`.", true)] / { trace("Transition action `` for TEST3_S1 to TEST3_S2."); } TransitionTo(TEST3_S2)
        if (trace_guard("State TEST3_S1: check behavior `1. EV1 TransitionTo(TEST3_S2)`.", true))
        {
            // Step 1: Exit states until we reach `TEST3_ROOT` state (Least Common Ancestor for transition).
            this._TEST3_S1_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST3_S1 to TEST3_S2.");`.
            console.log("Transition action `` for TEST3_S1 to TEST3_S2.");
            
            // Step 3: Enter/move towards transition target `TEST3_S2`.
            this._TEST3_S2_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST3_S2;
            this._ancestorEventHandler = null;
            return;
        } // end of behavior for TEST3_S1
        
        // TEST3_S1 behavior
        // uml: 2. EV1 [trace_guard("State TEST3_S1: check behavior `2. EV1 / { trace(\"failed\"); }`.", true)] / { trace("failed"); }
        if (trace_guard("State TEST3_S1: check behavior `2. EV1 / { trace(\"failed\"); }`.", true))
        {
            // Step 1: execute action `trace("failed");`
            console.log("failed");
            
            // Step 2: determine if ancestor gets to handle event next.
            this._ancestorEventHandler = null;  // consume event
        } // end of behavior for TEST3_S1
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST3_S2
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST3_S2_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST3_S2_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST3_S2_ev1;
        
        // TEST3_S2 behavior
        // uml: enter / { trace("Enter TEST3_S2."); }
        {
            // Step 1: execute action `trace("Enter TEST3_S2.");`
            console.log("Enter TEST3_S2.");
        } // end of behavior for TEST3_S2
    }
    
    _TEST3_S2_exit()
    {
        // TEST3_S2 behavior
        // uml: exit / { trace("Exit TEST3_S2."); }
        {
            // Step 1: execute action `trace("Exit TEST3_S2.");`
            console.log("Exit TEST3_S2.");
        } // end of behavior for TEST3_S2
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST3_ROOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST3_ROOT_ev1;  // the next ancestor that handles this event is TEST3_ROOT
    }
    
    _TEST3_S2_ev1()
    {
        // Setup handler for next ancestor that listens to `ev1` event.
        this._ancestorEventHandler = this._TEST3_ROOT_ev1;
        
        // TEST3_S2 behavior
        // uml: 1. EV1 [trace_guard("State TEST3_S2: check behavior `1. EV1 / { trace(\"1 woot!\"); }`.", true)] / { trace("1 woot!"); }
        if (trace_guard("State TEST3_S2: check behavior `1. EV1 / { trace(\"1 woot!\"); }`.", true))
        {
            // Step 1: execute action `trace("1 woot!");`
            console.log("1 woot!");
            
            // Step 2: determine if ancestor gets to handle event next.
            this._ancestorEventHandler = null;  // consume event
        } // end of behavior for TEST3_S2
        
        // TEST3_S2 behavior
        // uml: 1.1. EV1 [trace_guard("State TEST3_S2: check behavior `1.1. EV1 / { trace(\"2 woot!\"); }`.", true)] / { trace("2 woot!"); }
        if (trace_guard("State TEST3_S2: check behavior `1.1. EV1 / { trace(\"2 woot!\"); }`.", true))
        {
            // Step 1: execute action `trace("2 woot!");`
            console.log("2 woot!");
            
            // Step 2: determine if ancestor gets to handle event next.
            this._ancestorEventHandler = null;  // consume event
        } // end of behavior for TEST3_S2
        
        // TEST3_S2 behavior
        // uml: 2. EV1 [trace_guard("State TEST3_S2: check behavior `2. EV1 / { trace(\"3 woot!\"); } TransitionTo(TEST3_S3)`.", true)] / { trace("Transition action `trace(\"3 woot!\");` for TEST3_S2 to TEST3_S3.");\ntrace("3 woot!"); } TransitionTo(TEST3_S3)
        if (trace_guard("State TEST3_S2: check behavior `2. EV1 / { trace(\"3 woot!\"); } TransitionTo(TEST3_S3)`.", true))
        {
            // Step 1: Exit states until we reach `TEST3_ROOT` state (Least Common Ancestor for transition).
            this._TEST3_S2_exit();
            
            // Step 2: Transition action: `trace("Transition action `trace(\"3 woot!\");` for TEST3_S2 to TEST3_S3.");\ntrace("3 woot!");`.
            console.log("Transition action `trace(\"3 woot!\");` for TEST3_S2 to TEST3_S3.");
            console.log("3 woot!");
            
            // Step 3: Enter/move towards transition target `TEST3_S3`.
            this._TEST3_S3_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST3_S3;
            this._ancestorEventHandler = null;
            return;
        } // end of behavior for TEST3_S2
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST3_S3
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST3_S3_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST3_S3_exit;
        
        // TEST3_S3 behavior
        // uml: enter / { trace("Enter TEST3_S3."); }
        {
            // Step 1: execute action `trace("Enter TEST3_S3.");`
            console.log("Enter TEST3_S3.");
        } // end of behavior for TEST3_S3
    }
    
    _TEST3_S3_exit()
    {
        // TEST3_S3 behavior
        // uml: exit / { trace("Exit TEST3_S3."); }
        {
            // Step 1: execute action `trace("Exit TEST3_S3.");`
            console.log("Exit TEST3_S3.");
        } // end of behavior for TEST3_S3
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST3_ROOT_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST4_PARENT_CHILD_TRANSITIONS
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST4_PARENT_CHILD_TRANSITIONS_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST4_PARENT_CHILD_TRANSITIONS_exit;
        
        // TEST4_PARENT_CHILD_TRANSITIONS behavior
        // uml: enter / { trace("Enter TEST4_PARENT_CHILD_TRANSITIONS."); }
        {
            // Step 1: execute action `trace("Enter TEST4_PARENT_CHILD_TRANSITIONS.");`
            console.log("Enter TEST4_PARENT_CHILD_TRANSITIONS.");
        } // end of behavior for TEST4_PARENT_CHILD_TRANSITIONS
    }
    
    _TEST4_PARENT_CHILD_TRANSITIONS_exit()
    {
        // TEST4_PARENT_CHILD_TRANSITIONS behavior
        // uml: exit / { trace("Exit TEST4_PARENT_CHILD_TRANSITIONS."); }
        {
            // Step 1: execute action `trace("Exit TEST4_PARENT_CHILD_TRANSITIONS.");`
            console.log("Exit TEST4_PARENT_CHILD_TRANSITIONS.");
        } // end of behavior for TEST4_PARENT_CHILD_TRANSITIONS
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._ROOT_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST4_B_AND_OTHERS
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST4_B_AND_OTHERS_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST4_B_AND_OTHERS_exit;
        
        // TEST4_B_AND_OTHERS behavior
        // uml: enter / { trace("Enter TEST4_B_AND_OTHERS."); }
        {
            // Step 1: execute action `trace("Enter TEST4_B_AND_OTHERS.");`
            console.log("Enter TEST4_B_AND_OTHERS.");
        } // end of behavior for TEST4_B_AND_OTHERS
        
        // TEST4_B_AND_OTHERS behavior
        // uml: enter [trace_guard("State TEST4_B_AND_OTHERS: check behavior `enter / { clear_dispatch_output(); }`.", true)] / { clear_dispatch_output(); }
        if (trace_guard("State TEST4_B_AND_OTHERS: check behavior `enter / { clear_dispatch_output(); }`.", true))
        {
            // Step 1: execute action `clear_dispatch_output();`
            console.log("CLEAR_OUTPUT_BEFORE_THIS_AND_FOR_THIS_EVENT_DISPATCH");;
        } // end of behavior for TEST4_B_AND_OTHERS
    }
    
    _TEST4_B_AND_OTHERS_exit()
    {
        // TEST4_B_AND_OTHERS behavior
        // uml: exit / { trace("Exit TEST4_B_AND_OTHERS."); }
        {
            // Step 1: execute action `trace("Exit TEST4_B_AND_OTHERS.");`
            console.log("Exit TEST4_B_AND_OTHERS.");
        } // end of behavior for TEST4_B_AND_OTHERS
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST4_PARENT_CHILD_TRANSITIONS_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST4B_LOCAL
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST4B_LOCAL_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST4B_LOCAL_exit;
        
        // TEST4B_LOCAL behavior
        // uml: enter / { trace("Enter TEST4B_LOCAL."); }
        {
            // Step 1: execute action `trace("Enter TEST4B_LOCAL.");`
            console.log("Enter TEST4B_LOCAL.");
        } // end of behavior for TEST4B_LOCAL
    }
    
    _TEST4B_LOCAL_exit()
    {
        // TEST4B_LOCAL behavior
        // uml: exit / { trace("Exit TEST4B_LOCAL."); }
        {
            // Step 1: execute action `trace("Exit TEST4B_LOCAL.");`
            console.log("Exit TEST4B_LOCAL.");
        } // end of behavior for TEST4B_LOCAL
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST4_B_AND_OTHERS_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST4B_G
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST4B_G_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST4B_G_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST4B_G_ev1;
        
        // TEST4B_G behavior
        // uml: enter / { trace("Enter TEST4B_G."); }
        {
            // Step 1: execute action `trace("Enter TEST4B_G.");`
            console.log("Enter TEST4B_G.");
        } // end of behavior for TEST4B_G
    }
    
    _TEST4B_G_exit()
    {
        // TEST4B_G behavior
        // uml: exit / { trace("Exit TEST4B_G."); }
        {
            // Step 1: execute action `trace("Exit TEST4B_G.");`
            console.log("Exit TEST4B_G.");
        } // end of behavior for TEST4B_G
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST4B_LOCAL_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _TEST4B_G_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // TEST4B_G behavior
        // uml: EV1 [trace_guard("State TEST4B_G: check behavior `EV1 TransitionTo(TEST4B_G_1)`.", true)] / { trace("Transition action `` for TEST4B_G to TEST4B_G_1."); } TransitionTo(TEST4B_G_1)
        if (trace_guard("State TEST4B_G: check behavior `EV1 TransitionTo(TEST4B_G_1)`.", true))
        {
            // Step 1: Exit states until we reach `TEST4B_G` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._TEST4B_G_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for TEST4B_G to TEST4B_G_1.");`.
            console.log("Transition action `` for TEST4B_G to TEST4B_G_1.");
            
            // Step 3: Enter/move towards transition target `TEST4B_G_1`.
            this._TEST4B_G_1_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST4B_G_1;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for TEST4B_G
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST4B_G_1
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST4B_G_1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST4B_G_1_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = this._TEST4B_G_1_ev2;
        
        // TEST4B_G_1 behavior
        // uml: enter / { trace("Enter TEST4B_G_1."); }
        {
            // Step 1: execute action `trace("Enter TEST4B_G_1.");`
            console.log("Enter TEST4B_G_1.");
        } // end of behavior for TEST4B_G_1
    }
    
    _TEST4B_G_1_exit()
    {
        // TEST4B_G_1 behavior
        // uml: exit / { trace("Exit TEST4B_G_1."); }
        {
            // Step 1: execute action `trace("Exit TEST4B_G_1.");`
            console.log("Exit TEST4B_G_1.");
        } // end of behavior for TEST4B_G_1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST4B_G_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = null;  // no ancestor listens to this event
    }
    
    _TEST4B_G_1_ev2()
    {
        // No ancestor state handles `ev2` event.
        
        // TEST4B_G_1 behavior
        // uml: EV2 [trace_guard("State TEST4B_G_1: check behavior `EV2 TransitionTo(TEST4B_G)`.", true)] / { trace("Transition action `` for TEST4B_G_1 to TEST4B_G."); } TransitionTo(TEST4B_G)
        if (trace_guard("State TEST4B_G_1: check behavior `EV2 TransitionTo(TEST4B_G)`.", true))
        {
            // Step 1: Exit states until we reach `TEST4B_G` state (Least Common Ancestor for transition).
            this._TEST4B_G_1_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST4B_G_1 to TEST4B_G.");`.
            console.log("Transition action `` for TEST4B_G_1 to TEST4B_G.");
            
            // Step 3: Enter/move towards transition target `TEST4B_G`.
            // Already in target. No entering required.
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST4B_G;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for TEST4B_G_1
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST4C_LOCAL_TO_ALIAS
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST4C_LOCAL_TO_ALIAS_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST4C_LOCAL_TO_ALIAS_exit;
        
        // TEST4C_LOCAL_TO_ALIAS behavior
        // uml: enter / { trace("Enter TEST4C_LOCAL_TO_ALIAS."); }
        {
            // Step 1: execute action `trace("Enter TEST4C_LOCAL_TO_ALIAS.");`
            console.log("Enter TEST4C_LOCAL_TO_ALIAS.");
        } // end of behavior for TEST4C_LOCAL_TO_ALIAS
    }
    
    _TEST4C_LOCAL_TO_ALIAS_exit()
    {
        // TEST4C_LOCAL_TO_ALIAS behavior
        // uml: exit / { trace("Exit TEST4C_LOCAL_TO_ALIAS."); }
        {
            // Step 1: execute action `trace("Exit TEST4C_LOCAL_TO_ALIAS.");`
            console.log("Exit TEST4C_LOCAL_TO_ALIAS.");
        } // end of behavior for TEST4C_LOCAL_TO_ALIAS
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST4_B_AND_OTHERS_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST4C_G
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST4C_G_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST4C_G_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST4C_G_ev1;
        
        // TEST4C_G behavior
        // uml: enter / { trace("Enter TEST4C_G."); }
        {
            // Step 1: execute action `trace("Enter TEST4C_G.");`
            console.log("Enter TEST4C_G.");
        } // end of behavior for TEST4C_G
    }
    
    _TEST4C_G_exit()
    {
        // TEST4C_G behavior
        // uml: exit / { trace("Exit TEST4C_G."); }
        {
            // Step 1: execute action `trace("Exit TEST4C_G.");`
            console.log("Exit TEST4C_G.");
        } // end of behavior for TEST4C_G
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST4C_LOCAL_TO_ALIAS_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _TEST4C_G_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // TEST4C_G behavior
        // uml: EV1 [trace_guard("State TEST4C_G: check behavior `EV1 TransitionTo(TEST4C_G_1)`.", true)] / { trace("Transition action `` for TEST4C_G to TEST4C_G_1."); } TransitionTo(TEST4C_G_1)
        if (trace_guard("State TEST4C_G: check behavior `EV1 TransitionTo(TEST4C_G_1)`.", true))
        {
            // Step 1: Exit states until we reach `TEST4C_G` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._TEST4C_G_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for TEST4C_G to TEST4C_G_1.");`.
            console.log("Transition action `` for TEST4C_G to TEST4C_G_1.");
            
            // Step 3: Enter/move towards transition target `TEST4C_G_1`.
            this._TEST4C_G_1_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST4C_G_1;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for TEST4C_G
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST4C_G_1
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST4C_G_1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST4C_G_1_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = this._TEST4C_G_1_ev2;
        
        // TEST4C_G_1 behavior
        // uml: enter / { trace("Enter TEST4C_G_1."); }
        {
            // Step 1: execute action `trace("Enter TEST4C_G_1.");`
            console.log("Enter TEST4C_G_1.");
        } // end of behavior for TEST4C_G_1
    }
    
    _TEST4C_G_1_exit()
    {
        // TEST4C_G_1 behavior
        // uml: exit / { trace("Exit TEST4C_G_1."); }
        {
            // Step 1: execute action `trace("Exit TEST4C_G_1.");`
            console.log("Exit TEST4C_G_1.");
        } // end of behavior for TEST4C_G_1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST4C_G_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = null;  // no ancestor listens to this event
    }
    
    _TEST4C_G_1_ev2()
    {
        // No ancestor state handles `ev2` event.
        
        // TEST4C_G_1 behavior
        // uml: EV2 [trace_guard("State TEST4C_G_1: check behavior `EV2 TransitionTo(TEST4C_G)`.", true)] / { trace("Transition action `` for TEST4C_G_1 to TEST4C_G."); } TransitionTo(TEST4C_G)
        if (trace_guard("State TEST4C_G_1: check behavior `EV2 TransitionTo(TEST4C_G)`.", true))
        {
            // Step 1: Exit states until we reach `TEST4C_G` state (Least Common Ancestor for transition).
            this._TEST4C_G_1_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST4C_G_1 to TEST4C_G.");`.
            console.log("Transition action `` for TEST4C_G_1 to TEST4C_G.");
            
            // Step 3: Enter/move towards transition target `TEST4C_G`.
            // Already in target. No entering required.
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST4C_G;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for TEST4C_G_1
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST4D_EXTERNAL
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST4D_EXTERNAL_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST4D_EXTERNAL_exit;
        
        // TEST4D_EXTERNAL behavior
        // uml: enter / { trace("Enter TEST4D_EXTERNAL."); }
        {
            // Step 1: execute action `trace("Enter TEST4D_EXTERNAL.");`
            console.log("Enter TEST4D_EXTERNAL.");
        } // end of behavior for TEST4D_EXTERNAL
    }
    
    _TEST4D_EXTERNAL_exit()
    {
        // TEST4D_EXTERNAL behavior
        // uml: exit / { trace("Exit TEST4D_EXTERNAL."); }
        {
            // Step 1: execute action `trace("Exit TEST4D_EXTERNAL.");`
            console.log("Exit TEST4D_EXTERNAL.");
        } // end of behavior for TEST4D_EXTERNAL
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST4_B_AND_OTHERS_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST4D_G
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST4D_G_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST4D_G_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST4D_G_ev1;
        
        // TEST4D_G behavior
        // uml: enter / { trace("Enter TEST4D_G."); }
        {
            // Step 1: execute action `trace("Enter TEST4D_G.");`
            console.log("Enter TEST4D_G.");
        } // end of behavior for TEST4D_G
    }
    
    _TEST4D_G_exit()
    {
        // TEST4D_G behavior
        // uml: exit / { trace("Exit TEST4D_G."); }
        {
            // Step 1: execute action `trace("Exit TEST4D_G.");`
            console.log("Exit TEST4D_G.");
        } // end of behavior for TEST4D_G
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST4D_EXTERNAL_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _TEST4D_G_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // TEST4D_G behavior
        // uml: EV1 [trace_guard("State TEST4D_G: check behavior `EV1 TransitionTo(TEST4D_EXTERNAL.ChoicePoint())`.", true)] / { trace("Transition action `` for TEST4D_G to TEST4D_EXTERNAL.ChoicePoint()."); } TransitionTo(TEST4D_EXTERNAL.ChoicePoint())
        if (trace_guard("State TEST4D_G: check behavior `EV1 TransitionTo(TEST4D_EXTERNAL.ChoicePoint())`.", true))
        {
            // Step 1: Exit states until we reach `TEST4D_EXTERNAL` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._TEST4D_EXTERNAL_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for TEST4D_G to TEST4D_EXTERNAL.ChoicePoint().");`.
            console.log("Transition action `` for TEST4D_G to TEST4D_EXTERNAL.ChoicePoint().");
            
            // Step 3: Enter/move towards transition target `TEST4D_EXTERNAL.ChoicePoint()`.
            // TEST4D_EXTERNAL.ChoicePoint() is a pseudo state and cannot have an `enter` trigger.
            
            // TEST4D_EXTERNAL.ChoicePoint() behavior
            // uml: / { trace("Transition action `` for TEST4D_EXTERNAL.ChoicePoint() to TEST4D_G_1."); } TransitionTo(TEST4D_G_1)
            {
                // Step 1: Exit states until we reach `TEST4D_EXTERNAL` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for TEST4D_EXTERNAL.ChoicePoint() to TEST4D_G_1.");`.
                console.log("Transition action `` for TEST4D_EXTERNAL.ChoicePoint() to TEST4D_G_1.");
                
                // Step 3: Enter/move towards transition target `TEST4D_G_1`.
                this._TEST4D_G_enter();
                this._TEST4D_G_1_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.TEST4D_G_1;
                // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                return;
            } // end of behavior for TEST4D_EXTERNAL.ChoicePoint()
        } // end of behavior for TEST4D_G
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST4D_G_1
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST4D_G_1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST4D_G_1_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = this._TEST4D_G_1_ev2;
        
        // TEST4D_G_1 behavior
        // uml: enter / { trace("Enter TEST4D_G_1."); }
        {
            // Step 1: execute action `trace("Enter TEST4D_G_1.");`
            console.log("Enter TEST4D_G_1.");
        } // end of behavior for TEST4D_G_1
    }
    
    _TEST4D_G_1_exit()
    {
        // TEST4D_G_1 behavior
        // uml: exit / { trace("Exit TEST4D_G_1."); }
        {
            // Step 1: execute action `trace("Exit TEST4D_G_1.");`
            console.log("Exit TEST4D_G_1.");
        } // end of behavior for TEST4D_G_1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST4D_G_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = null;  // no ancestor listens to this event
    }
    
    _TEST4D_G_1_ev2()
    {
        // No ancestor state handles `ev2` event.
        
        // TEST4D_G_1 behavior
        // uml: EV2 [trace_guard("State TEST4D_G_1: check behavior `EV2 TransitionTo(TEST4D_EXTERNAL.ChoicePoint())`.", true)] / { trace("Transition action `` for TEST4D_G_1 to TEST4D_EXTERNAL.ChoicePoint()."); } TransitionTo(TEST4D_EXTERNAL.ChoicePoint())
        if (trace_guard("State TEST4D_G_1: check behavior `EV2 TransitionTo(TEST4D_EXTERNAL.ChoicePoint())`.", true))
        {
            // Step 1: Exit states until we reach `TEST4D_EXTERNAL` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._TEST4D_EXTERNAL_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for TEST4D_G_1 to TEST4D_EXTERNAL.ChoicePoint().");`.
            console.log("Transition action `` for TEST4D_G_1 to TEST4D_EXTERNAL.ChoicePoint().");
            
            // Step 3: Enter/move towards transition target `TEST4D_EXTERNAL.ChoicePoint()`.
            // TEST4D_EXTERNAL.ChoicePoint() is a pseudo state and cannot have an `enter` trigger.
            
            // TEST4D_EXTERNAL.ChoicePoint() behavior
            // uml: / { trace("Transition action `` for TEST4D_EXTERNAL.ChoicePoint() to TEST4D_G."); } TransitionTo(TEST4D_G)
            {
                // Step 1: Exit states until we reach `TEST4D_EXTERNAL` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for TEST4D_EXTERNAL.ChoicePoint() to TEST4D_G.");`.
                console.log("Transition action `` for TEST4D_EXTERNAL.ChoicePoint() to TEST4D_G.");
                
                // Step 3: Enter/move towards transition target `TEST4D_G`.
                this._TEST4D_G_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.TEST4D_G;
                // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                return;
            } // end of behavior for TEST4D_EXTERNAL.ChoicePoint()
        } // end of behavior for TEST4D_G_1
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST4_DECIDE
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST4_DECIDE_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST4_DECIDE_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST4_DECIDE_ev1;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = this._TEST4_DECIDE_ev2;
        this._currentEventHandlers[Spec2Sm.EventId.EV3] = this._TEST4_DECIDE_ev3;
        this._currentEventHandlers[Spec2Sm.EventId.EV4] = this._TEST4_DECIDE_ev4;
        
        // TEST4_DECIDE behavior
        // uml: enter / { trace("Enter TEST4_DECIDE."); }
        {
            // Step 1: execute action `trace("Enter TEST4_DECIDE.");`
            console.log("Enter TEST4_DECIDE.");
        } // end of behavior for TEST4_DECIDE
    }
    
    _TEST4_DECIDE_exit()
    {
        // TEST4_DECIDE behavior
        // uml: exit / { trace("Exit TEST4_DECIDE."); }
        {
            // Step 1: execute action `trace("Exit TEST4_DECIDE.");`
            console.log("Exit TEST4_DECIDE.");
        } // end of behavior for TEST4_DECIDE
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST4_PARENT_CHILD_TRANSITIONS_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV3] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV4] = null;  // no ancestor listens to this event
    }
    
    _TEST4_DECIDE_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // TEST4_DECIDE behavior
        // uml: EV1 [trace_guard("State TEST4_DECIDE: check behavior `EV1 TransitionTo(TEST4_ROOT)`.", true)] / { trace("Transition action `` for TEST4_DECIDE to TEST4_ROOT."); } TransitionTo(TEST4_ROOT)
        if (trace_guard("State TEST4_DECIDE: check behavior `EV1 TransitionTo(TEST4_ROOT)`.", true))
        {
            // Step 1: Exit states until we reach `TEST4_PARENT_CHILD_TRANSITIONS` state (Least Common Ancestor for transition).
            this._TEST4_DECIDE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST4_DECIDE to TEST4_ROOT.");`.
            console.log("Transition action `` for TEST4_DECIDE to TEST4_ROOT.");
            
            // Step 3: Enter/move towards transition target `TEST4_ROOT`.
            this._TEST4_ROOT_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST4_ROOT;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for TEST4_DECIDE
    }
    
    _TEST4_DECIDE_ev2()
    {
        // No ancestor state handles `ev2` event.
        
        // TEST4_DECIDE behavior
        // uml: EV2 [trace_guard("State TEST4_DECIDE: check behavior `EV2 TransitionTo(TEST4B_LOCAL)`.", true)] / { trace("Transition action `` for TEST4_DECIDE to TEST4B_LOCAL."); } TransitionTo(TEST4B_LOCAL)
        if (trace_guard("State TEST4_DECIDE: check behavior `EV2 TransitionTo(TEST4B_LOCAL)`.", true))
        {
            // Step 1: Exit states until we reach `TEST4_PARENT_CHILD_TRANSITIONS` state (Least Common Ancestor for transition).
            this._TEST4_DECIDE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST4_DECIDE to TEST4B_LOCAL.");`.
            console.log("Transition action `` for TEST4_DECIDE to TEST4B_LOCAL.");
            
            // Step 3: Enter/move towards transition target `TEST4B_LOCAL`.
            this._TEST4_B_AND_OTHERS_enter();
            this._TEST4B_LOCAL_enter();
            
            // TEST4B_LOCAL.InitialState behavior
            // uml: / { trace("Transition action `` for TEST4B_LOCAL.InitialState to TEST4B_G."); } TransitionTo(TEST4B_G)
            {
                // Step 1: Exit states until we reach `TEST4B_LOCAL` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for TEST4B_LOCAL.InitialState to TEST4B_G.");`.
                console.log("Transition action `` for TEST4B_LOCAL.InitialState to TEST4B_G.");
                
                // Step 3: Enter/move towards transition target `TEST4B_G`.
                this._TEST4B_G_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.TEST4B_G;
                // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                return;
            } // end of behavior for TEST4B_LOCAL.InitialState
        } // end of behavior for TEST4_DECIDE
    }
    
    _TEST4_DECIDE_ev3()
    {
        // No ancestor state handles `ev3` event.
        
        // TEST4_DECIDE behavior
        // uml: EV3 [trace_guard("State TEST4_DECIDE: check behavior `EV3 TransitionTo(TEST4C_LOCAL_TO_ALIAS)`.", true)] / { trace("Transition action `` for TEST4_DECIDE to TEST4C_LOCAL_TO_ALIAS."); } TransitionTo(TEST4C_LOCAL_TO_ALIAS)
        if (trace_guard("State TEST4_DECIDE: check behavior `EV3 TransitionTo(TEST4C_LOCAL_TO_ALIAS)`.", true))
        {
            // Step 1: Exit states until we reach `TEST4_PARENT_CHILD_TRANSITIONS` state (Least Common Ancestor for transition).
            this._TEST4_DECIDE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST4_DECIDE to TEST4C_LOCAL_TO_ALIAS.");`.
            console.log("Transition action `` for TEST4_DECIDE to TEST4C_LOCAL_TO_ALIAS.");
            
            // Step 3: Enter/move towards transition target `TEST4C_LOCAL_TO_ALIAS`.
            this._TEST4_B_AND_OTHERS_enter();
            this._TEST4C_LOCAL_TO_ALIAS_enter();
            
            // TEST4C_LOCAL_TO_ALIAS.InitialState behavior
            // uml: / { trace("Transition action `` for TEST4C_LOCAL_TO_ALIAS.InitialState to TEST4C_G."); } TransitionTo(TEST4C_G)
            {
                // Step 1: Exit states until we reach `TEST4C_LOCAL_TO_ALIAS` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for TEST4C_LOCAL_TO_ALIAS.InitialState to TEST4C_G.");`.
                console.log("Transition action `` for TEST4C_LOCAL_TO_ALIAS.InitialState to TEST4C_G.");
                
                // Step 3: Enter/move towards transition target `TEST4C_G`.
                this._TEST4C_G_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.TEST4C_G;
                // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                return;
            } // end of behavior for TEST4C_LOCAL_TO_ALIAS.InitialState
        } // end of behavior for TEST4_DECIDE
    }
    
    _TEST4_DECIDE_ev4()
    {
        // No ancestor state handles `ev4` event.
        
        // TEST4_DECIDE behavior
        // uml: EV4 [trace_guard("State TEST4_DECIDE: check behavior `EV4 TransitionTo(TEST4D_EXTERNAL)`.", true)] / { trace("Transition action `` for TEST4_DECIDE to TEST4D_EXTERNAL."); } TransitionTo(TEST4D_EXTERNAL)
        if (trace_guard("State TEST4_DECIDE: check behavior `EV4 TransitionTo(TEST4D_EXTERNAL)`.", true))
        {
            // Step 1: Exit states until we reach `TEST4_PARENT_CHILD_TRANSITIONS` state (Least Common Ancestor for transition).
            this._TEST4_DECIDE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST4_DECIDE to TEST4D_EXTERNAL.");`.
            console.log("Transition action `` for TEST4_DECIDE to TEST4D_EXTERNAL.");
            
            // Step 3: Enter/move towards transition target `TEST4D_EXTERNAL`.
            this._TEST4_B_AND_OTHERS_enter();
            this._TEST4D_EXTERNAL_enter();
            
            // TEST4D_EXTERNAL.InitialState behavior
            // uml: / { trace("Transition action `` for TEST4D_EXTERNAL.InitialState to TEST4D_G."); } TransitionTo(TEST4D_G)
            {
                // Step 1: Exit states until we reach `TEST4D_EXTERNAL` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for TEST4D_EXTERNAL.InitialState to TEST4D_G.");`.
                console.log("Transition action `` for TEST4D_EXTERNAL.InitialState to TEST4D_G.");
                
                // Step 3: Enter/move towards transition target `TEST4D_G`.
                this._TEST4D_G_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.TEST4D_G;
                // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                return;
            } // end of behavior for TEST4D_EXTERNAL.InitialState
        } // end of behavior for TEST4_DECIDE
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST4_ROOT
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST4_ROOT_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST4_ROOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = this._TEST4_ROOT_ev2;
        this._currentEventHandlers[Spec2Sm.EventId.EV3] = this._TEST4_ROOT_ev3;
        this._currentEventHandlers[Spec2Sm.EventId.EV4] = this._TEST4_ROOT_ev4;
        
        // TEST4_ROOT behavior
        // uml: enter / { trace("Enter TEST4_ROOT."); }
        {
            // Step 1: execute action `trace("Enter TEST4_ROOT.");`
            console.log("Enter TEST4_ROOT.");
        } // end of behavior for TEST4_ROOT
        
        // TEST4_ROOT behavior
        // uml: enter [trace_guard("State TEST4_ROOT: check behavior `enter / { clear_output(); }`.", true)] / { clear_output(); }
        if (trace_guard("State TEST4_ROOT: check behavior `enter / { clear_output(); }`.", true))
        {
            // Step 1: execute action `clear_output();`
            console.log("IGNORE_OUTPUT_BEFORE_THIS");;
        } // end of behavior for TEST4_ROOT
    }
    
    _TEST4_ROOT_exit()
    {
        // TEST4_ROOT behavior
        // uml: exit / { trace("Exit TEST4_ROOT."); }
        {
            // Step 1: execute action `trace("Exit TEST4_ROOT.");`
            console.log("Exit TEST4_ROOT.");
        } // end of behavior for TEST4_ROOT
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST4_PARENT_CHILD_TRANSITIONS_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV3] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV4] = null;  // no ancestor listens to this event
    }
    
    _TEST4_ROOT_ev2()
    {
        // No ancestor state handles `ev2` event.
        
        // TEST4_ROOT behavior
        // uml: EV2 [trace_guard("State TEST4_ROOT: check behavior `EV2 TransitionTo(TEST4_S1)`.", true)] / { trace("Transition action `` for TEST4_ROOT to TEST4_S1."); } TransitionTo(TEST4_S1)
        if (trace_guard("State TEST4_ROOT: check behavior `EV2 TransitionTo(TEST4_S1)`.", true))
        {
            // Step 1: Exit states until we reach `TEST4_ROOT` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._TEST4_ROOT_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for TEST4_ROOT to TEST4_S1.");`.
            console.log("Transition action `` for TEST4_ROOT to TEST4_S1.");
            
            // Step 3: Enter/move towards transition target `TEST4_S1`.
            this._TEST4_S1_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST4_S1;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for TEST4_ROOT
    }
    
    _TEST4_ROOT_ev3()
    {
        // No ancestor state handles `ev3` event.
        
        // TEST4_ROOT behavior
        // uml: EV3 [trace_guard("State TEST4_ROOT: check behavior `EV3 TransitionTo(TEST4_S10_1)`.", true)] / { trace("Transition action `` for TEST4_ROOT to TEST4_S10_1."); } TransitionTo(TEST4_S10_1)
        if (trace_guard("State TEST4_ROOT: check behavior `EV3 TransitionTo(TEST4_S10_1)`.", true))
        {
            // Step 1: Exit states until we reach `TEST4_ROOT` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._TEST4_ROOT_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for TEST4_ROOT to TEST4_S10_1.");`.
            console.log("Transition action `` for TEST4_ROOT to TEST4_S10_1.");
            
            // Step 3: Enter/move towards transition target `TEST4_S10_1`.
            this._TEST4_S10_enter();
            this._TEST4_S10_1_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST4_S10_1;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for TEST4_ROOT
    }
    
    _TEST4_ROOT_ev4()
    {
        // No ancestor state handles `ev4` event.
        
        // TEST4_ROOT behavior
        // uml: EV4 [trace_guard("State TEST4_ROOT: check behavior `EV4 TransitionTo(TEST4_S20)`.", true)] / { trace("Transition action `` for TEST4_ROOT to TEST4_S20."); } TransitionTo(TEST4_S20)
        if (trace_guard("State TEST4_ROOT: check behavior `EV4 TransitionTo(TEST4_S20)`.", true))
        {
            // Step 1: Exit states until we reach `TEST4_ROOT` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._TEST4_ROOT_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for TEST4_ROOT to TEST4_S20.");`.
            console.log("Transition action `` for TEST4_ROOT to TEST4_S20.");
            
            // Step 3: Enter/move towards transition target `TEST4_S20`.
            this._TEST4_S20_enter();
            
            // Finish transition by calling pseudo state transition function.
            this._TEST4_S20_InitialState_transition();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for TEST4_ROOT
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST4_S1
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST4_S1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST4_S1_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST4_S1_ev1;
        
        // TEST4_S1 behavior
        // uml: enter / { trace("Enter TEST4_S1."); }
        {
            // Step 1: execute action `trace("Enter TEST4_S1.");`
            console.log("Enter TEST4_S1.");
        } // end of behavior for TEST4_S1
    }
    
    _TEST4_S1_exit()
    {
        // TEST4_S1 behavior
        // uml: exit / { trace("Exit TEST4_S1."); }
        {
            // Step 1: execute action `trace("Exit TEST4_S1.");`
            console.log("Exit TEST4_S1.");
        } // end of behavior for TEST4_S1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST4_ROOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _TEST4_S1_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // TEST4_S1 behavior
        // uml: EV1 [trace_guard("State TEST4_S1: check behavior `EV1 TransitionTo(TEST4_S2)`.", true)] / { trace("Transition action `` for TEST4_S1 to TEST4_S2."); } TransitionTo(TEST4_S2)
        if (trace_guard("State TEST4_S1: check behavior `EV1 TransitionTo(TEST4_S2)`.", true))
        {
            // Step 1: Exit states until we reach `TEST4_ROOT` state (Least Common Ancestor for transition).
            this._TEST4_S1_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST4_S1 to TEST4_S2.");`.
            console.log("Transition action `` for TEST4_S1 to TEST4_S2.");
            
            // Step 3: Enter/move towards transition target `TEST4_S2`.
            this._TEST4_S2_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST4_S2;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for TEST4_S1
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST4_S10
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST4_S10_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST4_S10_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV4] = this._TEST4_S10_ev4;
        
        // TEST4_S10 behavior
        // uml: enter / { trace("Enter TEST4_S10."); }
        {
            // Step 1: execute action `trace("Enter TEST4_S10.");`
            console.log("Enter TEST4_S10.");
        } // end of behavior for TEST4_S10
    }
    
    _TEST4_S10_exit()
    {
        // TEST4_S10 behavior
        // uml: exit / { trace("Exit TEST4_S10."); }
        {
            // Step 1: execute action `trace("Exit TEST4_S10.");`
            console.log("Exit TEST4_S10.");
        } // end of behavior for TEST4_S10
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST4_ROOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV4] = this._TEST4_ROOT_ev4;  // the next ancestor that handles this event is TEST4_ROOT
    }
    
    _TEST4_S10_ev4()
    {
        // Setup handler for next ancestor that listens to `ev4` event.
        this._ancestorEventHandler = this._TEST4_ROOT_ev4;
        
        // TEST4_S10 behavior
        // uml: EV4 [trace_guard("State TEST4_S10: check behavior `EV4 TransitionTo(TEST4_S10)`.", true)] / { trace("Transition action `` for TEST4_S10 to TEST4_S10."); } TransitionTo(TEST4_S10)
        if (trace_guard("State TEST4_S10: check behavior `EV4 TransitionTo(TEST4_S10)`.", true))
        {
            // Step 1: Exit states until we reach `TEST4_ROOT` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._TEST4_ROOT_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for TEST4_S10 to TEST4_S10.");`.
            console.log("Transition action `` for TEST4_S10 to TEST4_S10.");
            
            // Step 3: Enter/move towards transition target `TEST4_S10`.
            this._TEST4_S10_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST4_S10;
            this._ancestorEventHandler = null;
            return;
        } // end of behavior for TEST4_S10
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST4_S10_1
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST4_S10_1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST4_S10_1_exit;
        
        // TEST4_S10_1 behavior
        // uml: enter / { trace("Enter TEST4_S10_1."); }
        {
            // Step 1: execute action `trace("Enter TEST4_S10_1.");`
            console.log("Enter TEST4_S10_1.");
        } // end of behavior for TEST4_S10_1
    }
    
    _TEST4_S10_1_exit()
    {
        // TEST4_S10_1 behavior
        // uml: exit / { trace("Exit TEST4_S10_1."); }
        {
            // Step 1: execute action `trace("Exit TEST4_S10_1.");`
            console.log("Exit TEST4_S10_1.");
        } // end of behavior for TEST4_S10_1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST4_S10_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST4_S2
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST4_S2_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST4_S2_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST4_S2_ev1;
        
        // TEST4_S2 behavior
        // uml: enter / { trace("Enter TEST4_S2."); }
        {
            // Step 1: execute action `trace("Enter TEST4_S2.");`
            console.log("Enter TEST4_S2.");
        } // end of behavior for TEST4_S2
    }
    
    _TEST4_S2_exit()
    {
        // TEST4_S2 behavior
        // uml: exit / { trace("Exit TEST4_S2."); }
        {
            // Step 1: execute action `trace("Exit TEST4_S2.");`
            console.log("Exit TEST4_S2.");
        } // end of behavior for TEST4_S2
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST4_ROOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _TEST4_S2_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // TEST4_S2 behavior
        // uml: EV1 [trace_guard("State TEST4_S2: check behavior `EV1 TransitionTo(TEST4_S3)`.", true)] / { trace("Transition action `` for TEST4_S2 to TEST4_S3."); } TransitionTo(TEST4_S3)
        if (trace_guard("State TEST4_S2: check behavior `EV1 TransitionTo(TEST4_S3)`.", true))
        {
            // Step 1: Exit states until we reach `TEST4_ROOT` state (Least Common Ancestor for transition).
            this._TEST4_S2_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST4_S2 to TEST4_S3.");`.
            console.log("Transition action `` for TEST4_S2 to TEST4_S3.");
            
            // Step 3: Enter/move towards transition target `TEST4_S3`.
            this._TEST4_S3_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST4_S3;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for TEST4_S2
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST4_S20
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST4_S20_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST4_S20_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV4] = this._TEST4_S20_ev4;
        
        // TEST4_S20 behavior
        // uml: enter / { trace("Enter TEST4_S20."); }
        {
            // Step 1: execute action `trace("Enter TEST4_S20.");`
            console.log("Enter TEST4_S20.");
        } // end of behavior for TEST4_S20
    }
    
    _TEST4_S20_exit()
    {
        // TEST4_S20 behavior
        // uml: exit / { trace("Exit TEST4_S20."); }
        {
            // Step 1: execute action `trace("Exit TEST4_S20.");`
            console.log("Exit TEST4_S20.");
        } // end of behavior for TEST4_S20
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST4_ROOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV4] = this._TEST4_ROOT_ev4;  // the next ancestor that handles this event is TEST4_ROOT
    }
    
    _TEST4_S20_ev4()
    {
        // Setup handler for next ancestor that listens to `ev4` event.
        this._ancestorEventHandler = this._TEST4_ROOT_ev4;
        
        // TEST4_S20 behavior
        // uml: EV4 [trace_guard("State TEST4_S20: check behavior `EV4 TransitionTo(TEST4_S20)`.", true)] / { trace("Transition action `` for TEST4_S20 to TEST4_S20."); } TransitionTo(TEST4_S20)
        if (trace_guard("State TEST4_S20: check behavior `EV4 TransitionTo(TEST4_S20)`.", true))
        {
            // Step 1: Exit states until we reach `TEST4_ROOT` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._TEST4_ROOT_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for TEST4_S20 to TEST4_S20.");`.
            console.log("Transition action `` for TEST4_S20 to TEST4_S20.");
            
            // Step 3: Enter/move towards transition target `TEST4_S20`.
            this._TEST4_S20_enter();
            
            // Finish transition by calling pseudo state transition function.
            this._TEST4_S20_InitialState_transition();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for TEST4_S20
    }
    
    _TEST4_S20_InitialState_transition()
    {
        // TEST4_S20.InitialState behavior
        // uml: / { trace("Transition action `` for TEST4_S20.InitialState to TEST4_S20_1."); } TransitionTo(TEST4_S20_1)
        {
            // Step 1: Exit states until we reach `TEST4_S20` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for TEST4_S20.InitialState to TEST4_S20_1.");`.
            console.log("Transition action `` for TEST4_S20.InitialState to TEST4_S20_1.");
            
            // Step 3: Enter/move towards transition target `TEST4_S20_1`.
            this._TEST4_S20_1_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST4_S20_1;
            this._ancestorEventHandler = null;
            return;
        } // end of behavior for TEST4_S20.InitialState
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST4_S20_1
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST4_S20_1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST4_S20_1_exit;
        
        // TEST4_S20_1 behavior
        // uml: enter / { trace("Enter TEST4_S20_1."); }
        {
            // Step 1: execute action `trace("Enter TEST4_S20_1.");`
            console.log("Enter TEST4_S20_1.");
        } // end of behavior for TEST4_S20_1
    }
    
    _TEST4_S20_1_exit()
    {
        // TEST4_S20_1 behavior
        // uml: exit / { trace("Exit TEST4_S20_1."); }
        {
            // Step 1: execute action `trace("Exit TEST4_S20_1.");`
            console.log("Exit TEST4_S20_1.");
        } // end of behavior for TEST4_S20_1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST4_S20_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST4_S3
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST4_S3_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST4_S3_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST4_S3_ev1;
        
        // TEST4_S3 behavior
        // uml: enter / { trace("Enter TEST4_S3."); }
        {
            // Step 1: execute action `trace("Enter TEST4_S3.");`
            console.log("Enter TEST4_S3.");
        } // end of behavior for TEST4_S3
    }
    
    _TEST4_S3_exit()
    {
        // TEST4_S3 behavior
        // uml: exit / { trace("Exit TEST4_S3."); }
        {
            // Step 1: execute action `trace("Exit TEST4_S3.");`
            console.log("Exit TEST4_S3.");
        } // end of behavior for TEST4_S3
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST4_ROOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _TEST4_S3_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // TEST4_S3 behavior
        // uml: EV1 [trace_guard("State TEST4_S3: check behavior `EV1 TransitionTo(TEST4_ROOT)`.", true)] / { trace("Transition action `` for TEST4_S3 to TEST4_ROOT."); } TransitionTo(TEST4_ROOT)
        if (trace_guard("State TEST4_S3: check behavior `EV1 TransitionTo(TEST4_ROOT)`.", true))
        {
            // Step 1: Exit states until we reach `TEST4_ROOT` state (Least Common Ancestor for transition).
            this._TEST4_S3_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST4_S3 to TEST4_ROOT.");`.
            console.log("Transition action `` for TEST4_S3 to TEST4_ROOT.");
            
            // Step 3: Enter/move towards transition target `TEST4_ROOT`.
            // Already in target. No entering required.
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST4_ROOT;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for TEST4_S3
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST5_PARENT_CHILD_TRANSITIONS_ALIAS
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST5_PARENT_CHILD_TRANSITIONS_ALIAS_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST5_PARENT_CHILD_TRANSITIONS_ALIAS_exit;
        
        // TEST5_PARENT_CHILD_TRANSITIONS_ALIAS behavior
        // uml: enter / { trace("Enter TEST5_PARENT_CHILD_TRANSITIONS_ALIAS."); }
        {
            // Step 1: execute action `trace("Enter TEST5_PARENT_CHILD_TRANSITIONS_ALIAS.");`
            console.log("Enter TEST5_PARENT_CHILD_TRANSITIONS_ALIAS.");
        } // end of behavior for TEST5_PARENT_CHILD_TRANSITIONS_ALIAS
    }
    
    _TEST5_PARENT_CHILD_TRANSITIONS_ALIAS_exit()
    {
        // TEST5_PARENT_CHILD_TRANSITIONS_ALIAS behavior
        // uml: exit / { trace("Exit TEST5_PARENT_CHILD_TRANSITIONS_ALIAS."); }
        {
            // Step 1: execute action `trace("Exit TEST5_PARENT_CHILD_TRANSITIONS_ALIAS.");`
            console.log("Exit TEST5_PARENT_CHILD_TRANSITIONS_ALIAS.");
        } // end of behavior for TEST5_PARENT_CHILD_TRANSITIONS_ALIAS
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._ROOT_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST5_ROOT
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST5_ROOT_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST5_ROOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = this._TEST5_ROOT_ev2;
        
        // TEST5_ROOT behavior
        // uml: enter / { trace("Enter TEST5_ROOT."); }
        {
            // Step 1: execute action `trace("Enter TEST5_ROOT.");`
            console.log("Enter TEST5_ROOT.");
        } // end of behavior for TEST5_ROOT
        
        // TEST5_ROOT behavior
        // uml: enter [trace_guard("State TEST5_ROOT: check behavior `enter / { clear_output(); }`.", true)] / { clear_output(); }
        if (trace_guard("State TEST5_ROOT: check behavior `enter / { clear_output(); }`.", true))
        {
            // Step 1: execute action `clear_output();`
            console.log("IGNORE_OUTPUT_BEFORE_THIS");;
        } // end of behavior for TEST5_ROOT
    }
    
    _TEST5_ROOT_exit()
    {
        // TEST5_ROOT behavior
        // uml: exit / { trace("Exit TEST5_ROOT."); }
        {
            // Step 1: execute action `trace("Exit TEST5_ROOT.");`
            console.log("Exit TEST5_ROOT.");
        } // end of behavior for TEST5_ROOT
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST5_PARENT_CHILD_TRANSITIONS_ALIAS_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = null;  // no ancestor listens to this event
    }
    
    _TEST5_ROOT_ev2()
    {
        // No ancestor state handles `ev2` event.
        
        // TEST5_ROOT behavior
        // uml: EV2 [trace_guard("State TEST5_ROOT: check behavior `EV2 TransitionTo(TEST5_S1)`.", true)] / { trace("Transition action `` for TEST5_ROOT to TEST5_S1."); } TransitionTo(TEST5_S1)
        if (trace_guard("State TEST5_ROOT: check behavior `EV2 TransitionTo(TEST5_S1)`.", true))
        {
            // Step 1: Exit states until we reach `TEST5_ROOT` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._TEST5_ROOT_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for TEST5_ROOT to TEST5_S1.");`.
            console.log("Transition action `` for TEST5_ROOT to TEST5_S1.");
            
            // Step 3: Enter/move towards transition target `TEST5_S1`.
            this._TEST5_S1_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST5_S1;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for TEST5_ROOT
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST5_S1
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST5_S1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST5_S1_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST5_S1_ev1;
        
        // TEST5_S1 behavior
        // uml: enter / { trace("Enter TEST5_S1."); }
        {
            // Step 1: execute action `trace("Enter TEST5_S1.");`
            console.log("Enter TEST5_S1.");
        } // end of behavior for TEST5_S1
    }
    
    _TEST5_S1_exit()
    {
        // TEST5_S1 behavior
        // uml: exit / { trace("Exit TEST5_S1."); }
        {
            // Step 1: execute action `trace("Exit TEST5_S1.");`
            console.log("Exit TEST5_S1.");
        } // end of behavior for TEST5_S1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST5_ROOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _TEST5_S1_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // TEST5_S1 behavior
        // uml: EV1 [trace_guard("State TEST5_S1: check behavior `EV1 TransitionTo(TEST5_S2)`.", true)] / { trace("Transition action `` for TEST5_S1 to TEST5_S2."); } TransitionTo(TEST5_S2)
        if (trace_guard("State TEST5_S1: check behavior `EV1 TransitionTo(TEST5_S2)`.", true))
        {
            // Step 1: Exit states until we reach `TEST5_ROOT` state (Least Common Ancestor for transition).
            this._TEST5_S1_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST5_S1 to TEST5_S2.");`.
            console.log("Transition action `` for TEST5_S1 to TEST5_S2.");
            
            // Step 3: Enter/move towards transition target `TEST5_S2`.
            this._TEST5_S2_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST5_S2;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for TEST5_S1
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST5_S2
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST5_S2_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST5_S2_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST5_S2_ev1;
        
        // TEST5_S2 behavior
        // uml: enter / { trace("Enter TEST5_S2."); }
        {
            // Step 1: execute action `trace("Enter TEST5_S2.");`
            console.log("Enter TEST5_S2.");
        } // end of behavior for TEST5_S2
    }
    
    _TEST5_S2_exit()
    {
        // TEST5_S2 behavior
        // uml: exit / { trace("Exit TEST5_S2."); }
        {
            // Step 1: execute action `trace("Exit TEST5_S2.");`
            console.log("Exit TEST5_S2.");
        } // end of behavior for TEST5_S2
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST5_ROOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _TEST5_S2_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // TEST5_S2 behavior
        // uml: EV1 [trace_guard("State TEST5_S2: check behavior `EV1 TransitionTo(TEST5_S3)`.", true)] / { trace("Transition action `` for TEST5_S2 to TEST5_S3."); } TransitionTo(TEST5_S3)
        if (trace_guard("State TEST5_S2: check behavior `EV1 TransitionTo(TEST5_S3)`.", true))
        {
            // Step 1: Exit states until we reach `TEST5_ROOT` state (Least Common Ancestor for transition).
            this._TEST5_S2_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST5_S2 to TEST5_S3.");`.
            console.log("Transition action `` for TEST5_S2 to TEST5_S3.");
            
            // Step 3: Enter/move towards transition target `TEST5_S3`.
            this._TEST5_S3_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST5_S3;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for TEST5_S2
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST5_S3
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST5_S3_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST5_S3_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST5_S3_ev1;
        
        // TEST5_S3 behavior
        // uml: enter / { trace("Enter TEST5_S3."); }
        {
            // Step 1: execute action `trace("Enter TEST5_S3.");`
            console.log("Enter TEST5_S3.");
        } // end of behavior for TEST5_S3
    }
    
    _TEST5_S3_exit()
    {
        // TEST5_S3 behavior
        // uml: exit / { trace("Exit TEST5_S3."); }
        {
            // Step 1: execute action `trace("Exit TEST5_S3.");`
            console.log("Exit TEST5_S3.");
        } // end of behavior for TEST5_S3
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST5_ROOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _TEST5_S3_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // TEST5_S3 behavior
        // uml: EV1 [trace_guard("State TEST5_S3: check behavior `EV1 TransitionTo(TEST5_ROOT)`.", true)] / { trace("Transition action `` for TEST5_S3 to TEST5_ROOT."); } TransitionTo(TEST5_ROOT)
        if (trace_guard("State TEST5_S3: check behavior `EV1 TransitionTo(TEST5_ROOT)`.", true))
        {
            // Step 1: Exit states until we reach `TEST5_ROOT` state (Least Common Ancestor for transition).
            this._TEST5_S3_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST5_S3 to TEST5_ROOT.");`.
            console.log("Transition action `` for TEST5_S3 to TEST5_ROOT.");
            
            // Step 3: Enter/move towards transition target `TEST5_ROOT`.
            // Already in target. No entering required.
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST5_ROOT;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for TEST5_S3
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST6_VARIABLES
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST6_VARIABLES_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST6_VARIABLES_exit;
        
        // TEST6_VARIABLES behavior
        // uml: enter / { trace("Enter TEST6_VARIABLES."); }
        {
            // Step 1: execute action `trace("Enter TEST6_VARIABLES.");`
            console.log("Enter TEST6_VARIABLES.");
        } // end of behavior for TEST6_VARIABLES
    }
    
    _TEST6_VARIABLES_exit()
    {
        // TEST6_VARIABLES behavior
        // uml: exit / { trace("Exit TEST6_VARIABLES."); }
        {
            // Step 1: execute action `trace("Exit TEST6_VARIABLES.");`
            console.log("Exit TEST6_VARIABLES.");
        } // end of behavior for TEST6_VARIABLES
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._ROOT_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST6_ROOT
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST6_ROOT_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST6_ROOT_exit;
        
        // TEST6_ROOT behavior
        // uml: enter / { trace("Enter TEST6_ROOT."); }
        {
            // Step 1: execute action `trace("Enter TEST6_ROOT.");`
            console.log("Enter TEST6_ROOT.");
        } // end of behavior for TEST6_ROOT
    }
    
    _TEST6_ROOT_exit()
    {
        // TEST6_ROOT behavior
        // uml: exit / { trace("Exit TEST6_ROOT."); }
        {
            // Step 1: execute action `trace("Exit TEST6_ROOT.");`
            console.log("Exit TEST6_ROOT.");
        } // end of behavior for TEST6_ROOT
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST6_VARIABLES_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST6_ROOT__AUTO_VAR_TEST
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST6_ROOT__AUTO_VAR_TEST_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST6_ROOT__AUTO_VAR_TEST_exit;
        
        // TEST6_ROOT__AUTO_VAR_TEST behavior
        // uml: enter / { trace("Enter TEST6_ROOT__AUTO_VAR_TEST."); }
        {
            // Step 1: execute action `trace("Enter TEST6_ROOT__AUTO_VAR_TEST.");`
            console.log("Enter TEST6_ROOT__AUTO_VAR_TEST.");
        } // end of behavior for TEST6_ROOT__AUTO_VAR_TEST
    }
    
    _TEST6_ROOT__AUTO_VAR_TEST_exit()
    {
        // TEST6_ROOT__AUTO_VAR_TEST behavior
        // uml: exit / { trace("Exit TEST6_ROOT__AUTO_VAR_TEST."); }
        {
            // Step 1: execute action `trace("Exit TEST6_ROOT__AUTO_VAR_TEST.");`
            console.log("Exit TEST6_ROOT__AUTO_VAR_TEST.");
        } // end of behavior for TEST6_ROOT__AUTO_VAR_TEST
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST6_ROOT_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST6_ROOT__AUTO_VAR_TEST__S1
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST6_ROOT__AUTO_VAR_TEST__S1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST6_ROOT__AUTO_VAR_TEST__S1_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST6_ROOT__AUTO_VAR_TEST__S1_ev1;
        
        // TEST6_ROOT__AUTO_VAR_TEST__S1 behavior
        // uml: enter / { trace("Enter TEST6_ROOT__AUTO_VAR_TEST__S1."); }
        {
            // Step 1: execute action `trace("Enter TEST6_ROOT__AUTO_VAR_TEST__S1.");`
            console.log("Enter TEST6_ROOT__AUTO_VAR_TEST__S1.");
        } // end of behavior for TEST6_ROOT__AUTO_VAR_TEST__S1
        
        // TEST6_ROOT__AUTO_VAR_TEST__S1 behavior
        // uml: enter [trace_guard("State TEST6_ROOT__AUTO_VAR_TEST__S1: check behavior `enter / { clear_output(); }`.", true)] / { clear_output(); }
        if (trace_guard("State TEST6_ROOT__AUTO_VAR_TEST__S1: check behavior `enter / { clear_output(); }`.", true))
        {
            // Step 1: execute action `clear_output();`
            console.log("IGNORE_OUTPUT_BEFORE_THIS");;
        } // end of behavior for TEST6_ROOT__AUTO_VAR_TEST__S1
    }
    
    _TEST6_ROOT__AUTO_VAR_TEST__S1_exit()
    {
        // TEST6_ROOT__AUTO_VAR_TEST__S1 behavior
        // uml: exit / { trace("Exit TEST6_ROOT__AUTO_VAR_TEST__S1."); }
        {
            // Step 1: execute action `trace("Exit TEST6_ROOT__AUTO_VAR_TEST__S1.");`
            console.log("Exit TEST6_ROOT__AUTO_VAR_TEST__S1.");
        } // end of behavior for TEST6_ROOT__AUTO_VAR_TEST__S1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST6_ROOT__AUTO_VAR_TEST_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _TEST6_ROOT__AUTO_VAR_TEST__S1_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // TEST6_ROOT__AUTO_VAR_TEST__S1 behavior
        // uml: 1. EV1 [trace_guard("State TEST6_ROOT__AUTO_VAR_TEST__S1: check behavior `1. EV1 / { auto_var_1++; }`.", true)] / { auto_var_1++; }
        if (trace_guard("State TEST6_ROOT__AUTO_VAR_TEST__S1: check behavior `1. EV1 / { auto_var_1++; }`.", true))
        {
            // Step 1: execute action `auto_var_1++;`
            this.vars.auto_var_1++;
            
            // Step 2: determine if ancestor gets to handle event next.
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
        } // end of behavior for TEST6_ROOT__AUTO_VAR_TEST__S1
        
        // TEST6_ROOT__AUTO_VAR_TEST__S1 behavior
        // uml: 2. EV1 [trace_guard("State TEST6_ROOT__AUTO_VAR_TEST__S1: check behavior `2. EV1 [auto_var_1 == 2] TransitionTo(TEST6_ROOT__AUTO_VAR_TEST__S2)`.", auto_var_1 == 2)] / { trace("Transition action `` for TEST6_ROOT__AUTO_VAR_TEST__S1 to TEST6_ROOT__AUTO_VAR_TEST__S2."); } TransitionTo(TEST6_ROOT__AUTO_VAR_TEST__S2)
        if (trace_guard("State TEST6_ROOT__AUTO_VAR_TEST__S1: check behavior `2. EV1 [auto_var_1 == 2] TransitionTo(TEST6_ROOT__AUTO_VAR_TEST__S2)`.", this.vars.auto_var_1 == 2))
        {
            // Step 1: Exit states until we reach `TEST6_ROOT__AUTO_VAR_TEST` state (Least Common Ancestor for transition).
            this._TEST6_ROOT__AUTO_VAR_TEST__S1_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST6_ROOT__AUTO_VAR_TEST__S1 to TEST6_ROOT__AUTO_VAR_TEST__S2.");`.
            console.log("Transition action `` for TEST6_ROOT__AUTO_VAR_TEST__S1 to TEST6_ROOT__AUTO_VAR_TEST__S2.");
            
            // Step 3: Enter/move towards transition target `TEST6_ROOT__AUTO_VAR_TEST__S2`.
            this._TEST6_ROOT__AUTO_VAR_TEST__S2_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST6_ROOT__AUTO_VAR_TEST__S2;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for TEST6_ROOT__AUTO_VAR_TEST__S1
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST6_ROOT__AUTO_VAR_TEST__S2
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST6_ROOT__AUTO_VAR_TEST__S2_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST6_ROOT__AUTO_VAR_TEST__S2_exit;
        
        // TEST6_ROOT__AUTO_VAR_TEST__S2 behavior
        // uml: enter / { trace("Enter TEST6_ROOT__AUTO_VAR_TEST__S2."); }
        {
            // Step 1: execute action `trace("Enter TEST6_ROOT__AUTO_VAR_TEST__S2.");`
            console.log("Enter TEST6_ROOT__AUTO_VAR_TEST__S2.");
        } // end of behavior for TEST6_ROOT__AUTO_VAR_TEST__S2
    }
    
    _TEST6_ROOT__AUTO_VAR_TEST__S2_exit()
    {
        // TEST6_ROOT__AUTO_VAR_TEST__S2 behavior
        // uml: exit / { trace("Exit TEST6_ROOT__AUTO_VAR_TEST__S2."); }
        {
            // Step 1: execute action `trace("Exit TEST6_ROOT__AUTO_VAR_TEST__S2.");`
            console.log("Exit TEST6_ROOT__AUTO_VAR_TEST__S2.");
        } // end of behavior for TEST6_ROOT__AUTO_VAR_TEST__S2
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST6_ROOT__AUTO_VAR_TEST_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST6_ROOT__DECIDE
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST6_ROOT__DECIDE_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST6_ROOT__DECIDE_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST6_ROOT__DECIDE_ev1;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = this._TEST6_ROOT__DECIDE_ev2;
        
        // TEST6_ROOT__DECIDE behavior
        // uml: enter / { trace("Enter TEST6_ROOT__DECIDE."); }
        {
            // Step 1: execute action `trace("Enter TEST6_ROOT__DECIDE.");`
            console.log("Enter TEST6_ROOT__DECIDE.");
        } // end of behavior for TEST6_ROOT__DECIDE
    }
    
    _TEST6_ROOT__DECIDE_exit()
    {
        // TEST6_ROOT__DECIDE behavior
        // uml: exit / { trace("Exit TEST6_ROOT__DECIDE."); }
        {
            // Step 1: execute action `trace("Exit TEST6_ROOT__DECIDE.");`
            console.log("Exit TEST6_ROOT__DECIDE.");
        } // end of behavior for TEST6_ROOT__DECIDE
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST6_ROOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = null;  // no ancestor listens to this event
    }
    
    _TEST6_ROOT__DECIDE_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // TEST6_ROOT__DECIDE behavior
        // uml: EV1 [trace_guard("State TEST6_ROOT__DECIDE: check behavior `EV1 TransitionTo(TEST6_ROOT__NORMAL)`.", true)] / { trace("Transition action `` for TEST6_ROOT__DECIDE to TEST6_ROOT__NORMAL."); } TransitionTo(TEST6_ROOT__NORMAL)
        if (trace_guard("State TEST6_ROOT__DECIDE: check behavior `EV1 TransitionTo(TEST6_ROOT__NORMAL)`.", true))
        {
            // Step 1: Exit states until we reach `TEST6_ROOT` state (Least Common Ancestor for transition).
            this._TEST6_ROOT__DECIDE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST6_ROOT__DECIDE to TEST6_ROOT__NORMAL.");`.
            console.log("Transition action `` for TEST6_ROOT__DECIDE to TEST6_ROOT__NORMAL.");
            
            // Step 3: Enter/move towards transition target `TEST6_ROOT__NORMAL`.
            this._TEST6_ROOT__NORMAL_enter();
            
            // TEST6_ROOT__NORMAL.InitialState behavior
            // uml: / { trace("Transition action `` for TEST6_ROOT__NORMAL.InitialState to TEST6_ROOT__NORMAL__S1."); } TransitionTo(TEST6_ROOT__NORMAL__S1)
            {
                // Step 1: Exit states until we reach `TEST6_ROOT__NORMAL` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for TEST6_ROOT__NORMAL.InitialState to TEST6_ROOT__NORMAL__S1.");`.
                console.log("Transition action `` for TEST6_ROOT__NORMAL.InitialState to TEST6_ROOT__NORMAL__S1.");
                
                // Step 3: Enter/move towards transition target `TEST6_ROOT__NORMAL__S1`.
                this._TEST6_ROOT__NORMAL__S1_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.TEST6_ROOT__NORMAL__S1;
                // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                return;
            } // end of behavior for TEST6_ROOT__NORMAL.InitialState
        } // end of behavior for TEST6_ROOT__DECIDE
    }
    
    _TEST6_ROOT__DECIDE_ev2()
    {
        // No ancestor state handles `ev2` event.
        
        // TEST6_ROOT__DECIDE behavior
        // uml: EV2 [trace_guard("State TEST6_ROOT__DECIDE: check behavior `EV2 TransitionTo(TEST6_ROOT__AUTO_VAR_TEST)`.", true)] / { trace("Transition action `` for TEST6_ROOT__DECIDE to TEST6_ROOT__AUTO_VAR_TEST."); } TransitionTo(TEST6_ROOT__AUTO_VAR_TEST)
        if (trace_guard("State TEST6_ROOT__DECIDE: check behavior `EV2 TransitionTo(TEST6_ROOT__AUTO_VAR_TEST)`.", true))
        {
            // Step 1: Exit states until we reach `TEST6_ROOT` state (Least Common Ancestor for transition).
            this._TEST6_ROOT__DECIDE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST6_ROOT__DECIDE to TEST6_ROOT__AUTO_VAR_TEST.");`.
            console.log("Transition action `` for TEST6_ROOT__DECIDE to TEST6_ROOT__AUTO_VAR_TEST.");
            
            // Step 3: Enter/move towards transition target `TEST6_ROOT__AUTO_VAR_TEST`.
            this._TEST6_ROOT__AUTO_VAR_TEST_enter();
            
            // TEST6_ROOT__AUTO_VAR_TEST.InitialState behavior
            // uml: / { trace("Transition action `` for TEST6_ROOT__AUTO_VAR_TEST.InitialState to TEST6_ROOT__AUTO_VAR_TEST__S1."); } TransitionTo(TEST6_ROOT__AUTO_VAR_TEST__S1)
            {
                // Step 1: Exit states until we reach `TEST6_ROOT__AUTO_VAR_TEST` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for TEST6_ROOT__AUTO_VAR_TEST.InitialState to TEST6_ROOT__AUTO_VAR_TEST__S1.");`.
                console.log("Transition action `` for TEST6_ROOT__AUTO_VAR_TEST.InitialState to TEST6_ROOT__AUTO_VAR_TEST__S1.");
                
                // Step 3: Enter/move towards transition target `TEST6_ROOT__AUTO_VAR_TEST__S1`.
                this._TEST6_ROOT__AUTO_VAR_TEST__S1_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.TEST6_ROOT__AUTO_VAR_TEST__S1;
                // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                return;
            } // end of behavior for TEST6_ROOT__AUTO_VAR_TEST.InitialState
        } // end of behavior for TEST6_ROOT__DECIDE
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST6_ROOT__NORMAL
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST6_ROOT__NORMAL_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST6_ROOT__NORMAL_exit;
        
        // TEST6_ROOT__NORMAL behavior
        // uml: enter / { trace("Enter TEST6_ROOT__NORMAL."); }
        {
            // Step 1: execute action `trace("Enter TEST6_ROOT__NORMAL.");`
            console.log("Enter TEST6_ROOT__NORMAL.");
        } // end of behavior for TEST6_ROOT__NORMAL
    }
    
    _TEST6_ROOT__NORMAL_exit()
    {
        // TEST6_ROOT__NORMAL behavior
        // uml: exit / { trace("Exit TEST6_ROOT__NORMAL."); }
        {
            // Step 1: execute action `trace("Exit TEST6_ROOT__NORMAL.");`
            console.log("Exit TEST6_ROOT__NORMAL.");
        } // end of behavior for TEST6_ROOT__NORMAL
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST6_ROOT_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST6_ROOT__NORMAL__S1
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST6_ROOT__NORMAL__S1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST6_ROOT__NORMAL__S1_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST6_ROOT__NORMAL__S1_ev1;
        
        // TEST6_ROOT__NORMAL__S1 behavior
        // uml: enter / { trace("Enter TEST6_ROOT__NORMAL__S1."); }
        {
            // Step 1: execute action `trace("Enter TEST6_ROOT__NORMAL__S1.");`
            console.log("Enter TEST6_ROOT__NORMAL__S1.");
        } // end of behavior for TEST6_ROOT__NORMAL__S1
        
        // TEST6_ROOT__NORMAL__S1 behavior
        // uml: enter [trace_guard("State TEST6_ROOT__NORMAL__S1: check behavior `enter / { clear_output(); }`.", true)] / { clear_output(); }
        if (trace_guard("State TEST6_ROOT__NORMAL__S1: check behavior `enter / { clear_output(); }`.", true))
        {
            // Step 1: execute action `clear_output();`
            console.log("IGNORE_OUTPUT_BEFORE_THIS");;
        } // end of behavior for TEST6_ROOT__NORMAL__S1
    }
    
    _TEST6_ROOT__NORMAL__S1_exit()
    {
        // TEST6_ROOT__NORMAL__S1 behavior
        // uml: exit / { trace("Exit TEST6_ROOT__NORMAL__S1."); }
        {
            // Step 1: execute action `trace("Exit TEST6_ROOT__NORMAL__S1.");`
            console.log("Exit TEST6_ROOT__NORMAL__S1.");
        } // end of behavior for TEST6_ROOT__NORMAL__S1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST6_ROOT__NORMAL_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _TEST6_ROOT__NORMAL__S1_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // TEST6_ROOT__NORMAL__S1 behavior
        // uml: 1. EV1 [trace_guard("State TEST6_ROOT__NORMAL__S1: check behavior `1. EV1 / { count++; }`.", true)] / { count++; }
        if (trace_guard("State TEST6_ROOT__NORMAL__S1: check behavior `1. EV1 / { count++; }`.", true))
        {
            // Step 1: execute action `count++;`
            this.vars.count++;
            
            // Step 2: determine if ancestor gets to handle event next.
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
        } // end of behavior for TEST6_ROOT__NORMAL__S1
        
        // TEST6_ROOT__NORMAL__S1 behavior
        // uml: 2. EV1 [trace_guard("State TEST6_ROOT__NORMAL__S1: check behavior `2. EV1 [count >= 2] TransitionTo(TEST6_ROOT__NORMAL__S2)`.", count >= 2)] / { trace("Transition action `` for TEST6_ROOT__NORMAL__S1 to TEST6_ROOT__NORMAL__S2."); } TransitionTo(TEST6_ROOT__NORMAL__S2)
        if (trace_guard("State TEST6_ROOT__NORMAL__S1: check behavior `2. EV1 [count >= 2] TransitionTo(TEST6_ROOT__NORMAL__S2)`.", this.vars.count >= 2))
        {
            // Step 1: Exit states until we reach `TEST6_ROOT__NORMAL` state (Least Common Ancestor for transition).
            this._TEST6_ROOT__NORMAL__S1_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST6_ROOT__NORMAL__S1 to TEST6_ROOT__NORMAL__S2.");`.
            console.log("Transition action `` for TEST6_ROOT__NORMAL__S1 to TEST6_ROOT__NORMAL__S2.");
            
            // Step 3: Enter/move towards transition target `TEST6_ROOT__NORMAL__S2`.
            this._TEST6_ROOT__NORMAL__S2_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST6_ROOT__NORMAL__S2;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for TEST6_ROOT__NORMAL__S1
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST6_ROOT__NORMAL__S2
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST6_ROOT__NORMAL__S2_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST6_ROOT__NORMAL__S2_exit;
        
        // TEST6_ROOT__NORMAL__S2 behavior
        // uml: enter / { trace("Enter TEST6_ROOT__NORMAL__S2."); }
        {
            // Step 1: execute action `trace("Enter TEST6_ROOT__NORMAL__S2.");`
            console.log("Enter TEST6_ROOT__NORMAL__S2.");
        } // end of behavior for TEST6_ROOT__NORMAL__S2
    }
    
    _TEST6_ROOT__NORMAL__S2_exit()
    {
        // TEST6_ROOT__NORMAL__S2 behavior
        // uml: exit / { trace("Exit TEST6_ROOT__NORMAL__S2."); }
        {
            // Step 1: execute action `trace("Exit TEST6_ROOT__NORMAL__S2.");`
            console.log("Exit TEST6_ROOT__NORMAL__S2.");
        } // end of behavior for TEST6_ROOT__NORMAL__S2
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST6_ROOT__NORMAL_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST7_INITIAL_OR_HISTORY
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST7_INITIAL_OR_HISTORY_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST7_INITIAL_OR_HISTORY_exit;
        
        // TEST7_INITIAL_OR_HISTORY behavior
        // uml: enter / { trace("Enter TEST7_INITIAL_OR_HISTORY."); }
        {
            // Step 1: execute action `trace("Enter TEST7_INITIAL_OR_HISTORY.");`
            console.log("Enter TEST7_INITIAL_OR_HISTORY.");
        } // end of behavior for TEST7_INITIAL_OR_HISTORY
    }
    
    _TEST7_INITIAL_OR_HISTORY_exit()
    {
        // TEST7_INITIAL_OR_HISTORY behavior
        // uml: exit / { trace("Exit TEST7_INITIAL_OR_HISTORY."); }
        {
            // Step 1: execute action `trace("Exit TEST7_INITIAL_OR_HISTORY.");`
            console.log("Exit TEST7_INITIAL_OR_HISTORY.");
        } // end of behavior for TEST7_INITIAL_OR_HISTORY
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._ROOT_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST7
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST7_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST7_exit;
        
        // TEST7 behavior
        // uml: enter / { trace("Enter TEST7."); }
        {
            // Step 1: execute action `trace("Enter TEST7.");`
            console.log("Enter TEST7.");
        } // end of behavior for TEST7
        
        // TEST7 behavior
        // uml: enter [trace_guard("State TEST7: check behavior `enter / { clear_dispatch_output(); }`.", true)] / { clear_dispatch_output(); }
        if (trace_guard("State TEST7: check behavior `enter / { clear_dispatch_output(); }`.", true))
        {
            // Step 1: execute action `clear_dispatch_output();`
            console.log("CLEAR_OUTPUT_BEFORE_THIS_AND_FOR_THIS_EVENT_DISPATCH");;
        } // end of behavior for TEST7
    }
    
    _TEST7_exit()
    {
        // TEST7 behavior
        // uml: exit / { trace("Exit TEST7."); }
        {
            // Step 1: execute action `trace("Exit TEST7.");`
            console.log("Exit TEST7.");
        } // end of behavior for TEST7
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST7_INITIAL_OR_HISTORY_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DEEP_HISTORY1
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DEEP_HISTORY1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DEEP_HISTORY1_exit;
        
        // T7__DEEP_HISTORY1 behavior
        // uml: enter / { trace("Enter T7__DEEP_HISTORY1."); }
        {
            // Step 1: execute action `trace("Enter T7__DEEP_HISTORY1.");`
            console.log("Enter T7__DEEP_HISTORY1.");
        } // end of behavior for T7__DEEP_HISTORY1
    }
    
    _T7__DEEP_HISTORY1_exit()
    {
        // T7__DEEP_HISTORY1 behavior
        // uml: exit / { trace("Exit T7__DEEP_HISTORY1."); }
        {
            // Step 1: execute action `trace("Exit T7__DEEP_HISTORY1.");`
            console.log("Exit T7__DEEP_HISTORY1.");
        } // end of behavior for T7__DEEP_HISTORY1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST7_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH1__SANTAS_WORKSHOP
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH1__SANTAS_WORKSHOP_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH1__SANTAS_WORKSHOP_exit;
        
        // T7__DH1__SANTAS_WORKSHOP behavior
        // uml: enter / { trace("Enter T7__DH1__SANTAS_WORKSHOP."); }
        {
            // Step 1: execute action `trace("Enter T7__DH1__SANTAS_WORKSHOP.");`
            console.log("Enter T7__DH1__SANTAS_WORKSHOP.");
        } // end of behavior for T7__DH1__SANTAS_WORKSHOP
    }
    
    _T7__DH1__SANTAS_WORKSHOP_exit()
    {
        // T7__DH1__SANTAS_WORKSHOP behavior
        // uml: exit / { trace("Exit T7__DH1__SANTAS_WORKSHOP."); }
        {
            // Step 1: execute action `trace("Exit T7__DH1__SANTAS_WORKSHOP.");`
            console.log("Exit T7__DH1__SANTAS_WORKSHOP.");
        } // end of behavior for T7__DH1__SANTAS_WORKSHOP
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DEEP_HISTORY1_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH1__ALIENS_DETECTED
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH1__ALIENS_DETECTED_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH1__ALIENS_DETECTED_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV8] = this._T7__DH1__ALIENS_DETECTED_ev8;
        
        // T7__DH1__ALIENS_DETECTED behavior
        // uml: enter / { trace("Enter T7__DH1__ALIENS_DETECTED."); }
        {
            // Step 1: execute action `trace("Enter T7__DH1__ALIENS_DETECTED.");`
            console.log("Enter T7__DH1__ALIENS_DETECTED.");
        } // end of behavior for T7__DH1__ALIENS_DETECTED
    }
    
    _T7__DH1__ALIENS_DETECTED_exit()
    {
        // T7__DH1__ALIENS_DETECTED behavior
        // uml: exit / { trace("Exit T7__DH1__ALIENS_DETECTED."); }
        {
            // Step 1: execute action `trace("Exit T7__DH1__ALIENS_DETECTED.");`
            console.log("Exit T7__DH1__ALIENS_DETECTED.");
        } // end of behavior for T7__DH1__ALIENS_DETECTED
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH1__SANTAS_WORKSHOP_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV8] = null;  // no ancestor listens to this event
    }
    
    _T7__DH1__ALIENS_DETECTED_ev8()
    {
        // No ancestor state handles `ev8` event.
        
        // T7__DH1__ALIENS_DETECTED behavior
        // uml: EV8 [trace_guard("State T7__DH1__ALIENS_DETECTED: check behavior `EV8 TransitionTo(T7__DH1__BUILD)`.", true)] / { trace("Transition action `` for T7__DH1__ALIENS_DETECTED to T7__DH1__BUILD."); } TransitionTo(T7__DH1__BUILD)
        if (trace_guard("State T7__DH1__ALIENS_DETECTED: check behavior `EV8 TransitionTo(T7__DH1__BUILD)`.", true))
        {
            // Step 1: Exit states until we reach `T7__DH1__SANTAS_WORKSHOP` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._T7__DH1__SANTAS_WORKSHOP_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH1__ALIENS_DETECTED to T7__DH1__BUILD.");`.
            console.log("Transition action `` for T7__DH1__ALIENS_DETECTED to T7__DH1__BUILD.");
            
            // Step 3: Enter/move towards transition target `T7__DH1__BUILD`.
            this._T7__DH1__BUILD_enter();
            
            // Finish transition by calling pseudo state transition function.
            this._T7__DH1__BUILD_InitialState_transition();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for T7__DH1__ALIENS_DETECTED
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH1__GET_BACKUP
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH1__GET_BACKUP_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH1__GET_BACKUP_exit;
        
        // T7__DH1__GET_BACKUP behavior
        // uml: enter / { trace("Enter T7__DH1__GET_BACKUP."); }
        {
            // Step 1: execute action `trace("Enter T7__DH1__GET_BACKUP.");`
            console.log("Enter T7__DH1__GET_BACKUP.");
        } // end of behavior for T7__DH1__GET_BACKUP
    }
    
    _T7__DH1__GET_BACKUP_exit()
    {
        // T7__DH1__GET_BACKUP behavior
        // uml: exit / { trace("Exit T7__DH1__GET_BACKUP."); }
        {
            // Step 1: execute action `trace("Exit T7__DH1__GET_BACKUP.");`
            console.log("Exit T7__DH1__GET_BACKUP.");
        } // end of behavior for T7__DH1__GET_BACKUP
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH1__ALIENS_DETECTED_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH1__HERO
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH1__HERO_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH1__HERO_exit;
        
        // T7__DH1__HERO behavior
        // uml: enter / { trace("Enter T7__DH1__HERO."); }
        {
            // Step 1: execute action `trace("Enter T7__DH1__HERO.");`
            console.log("Enter T7__DH1__HERO.");
        } // end of behavior for T7__DH1__HERO
        
        // T7__DH1__HERO behavior
        // uml: enter [trace_guard("State T7__DH1__HERO: check behavior `enter / { this.vars.T7__DH1__ALIENS_DETECTED_history = T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__HERO; }`.", true)] / { this.vars.T7__DH1__ALIENS_DETECTED_history = T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__HERO; }
        if (trace_guard("State T7__DH1__HERO: check behavior `enter / { this.vars.T7__DH1__ALIENS_DETECTED_history = T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__HERO; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__DH1__ALIENS_DETECTED_history = T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__HERO;`
            this.vars.T7__DH1__ALIENS_DETECTED_history = Spec2Sm.T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__HERO;
        } // end of behavior for T7__DH1__HERO
        
        // T7__DH1__HERO behavior
        // uml: enter [trace_guard("State T7__DH1__HERO: check behavior `enter / { this.vars.T7__DH1__GET_BACKUP_history = T7__DH1__GET_BACKUP_HistoryId.T7__DH1__HERO; }`.", true)] / { this.vars.T7__DH1__GET_BACKUP_history = T7__DH1__GET_BACKUP_HistoryId.T7__DH1__HERO; }
        if (trace_guard("State T7__DH1__HERO: check behavior `enter / { this.vars.T7__DH1__GET_BACKUP_history = T7__DH1__GET_BACKUP_HistoryId.T7__DH1__HERO; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__DH1__GET_BACKUP_history = T7__DH1__GET_BACKUP_HistoryId.T7__DH1__HERO;`
            this.vars.T7__DH1__GET_BACKUP_history = Spec2Sm.T7__DH1__GET_BACKUP_HistoryId.T7__DH1__HERO;
        } // end of behavior for T7__DH1__HERO
    }
    
    _T7__DH1__HERO_exit()
    {
        // T7__DH1__HERO behavior
        // uml: exit / { trace("Exit T7__DH1__HERO."); }
        {
            // Step 1: execute action `trace("Exit T7__DH1__HERO.");`
            console.log("Exit T7__DH1__HERO.");
        } // end of behavior for T7__DH1__HERO
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH1__GET_BACKUP_exit;
    }
    
    _T7__DH1__HERO_InitialState_transition()
    {
        // T7__DH1__HERO.InitialState behavior
        // uml: / { trace("Transition action `` for T7__DH1__HERO.InitialState to T7__DH1__CALL_THOR."); } TransitionTo(T7__DH1__CALL_THOR)
        {
            // Step 1: Exit states until we reach `T7__DH1__HERO` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH1__HERO.InitialState to T7__DH1__CALL_THOR.");`.
            console.log("Transition action `` for T7__DH1__HERO.InitialState to T7__DH1__CALL_THOR.");
            
            // Step 3: Enter/move towards transition target `T7__DH1__CALL_THOR`.
            this._T7__DH1__CALL_THOR_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__DH1__CALL_THOR;
            this._ancestorEventHandler = null;
            return;
        } // end of behavior for T7__DH1__HERO.InitialState
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH1__CALL_BATMAN
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH1__CALL_BATMAN_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH1__CALL_BATMAN_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._T7__DH1__CALL_BATMAN_ev1;
        
        // T7__DH1__CALL_BATMAN behavior
        // uml: enter / { trace("Enter T7__DH1__CALL_BATMAN."); }
        {
            // Step 1: execute action `trace("Enter T7__DH1__CALL_BATMAN.");`
            console.log("Enter T7__DH1__CALL_BATMAN.");
        } // end of behavior for T7__DH1__CALL_BATMAN
    }
    
    _T7__DH1__CALL_BATMAN_exit()
    {
        // T7__DH1__CALL_BATMAN behavior
        // uml: exit / { trace("Exit T7__DH1__CALL_BATMAN."); }
        {
            // Step 1: execute action `trace("Exit T7__DH1__CALL_BATMAN.");`
            console.log("Exit T7__DH1__CALL_BATMAN.");
        } // end of behavior for T7__DH1__CALL_BATMAN
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH1__HERO_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _T7__DH1__CALL_BATMAN_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // T7__DH1__CALL_BATMAN behavior
        // uml: EV1 [trace_guard("State T7__DH1__CALL_BATMAN: check behavior `EV1 TransitionTo(T7__DH1__BUDDY_ELF)`.", true)] / { trace("Transition action `` for T7__DH1__CALL_BATMAN to T7__DH1__BUDDY_ELF."); } TransitionTo(T7__DH1__BUDDY_ELF)
        if (trace_guard("State T7__DH1__CALL_BATMAN: check behavior `EV1 TransitionTo(T7__DH1__BUDDY_ELF)`.", true))
        {
            // Step 1: Exit states until we reach `T7__DH1__GET_BACKUP` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._T7__DH1__GET_BACKUP_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH1__CALL_BATMAN to T7__DH1__BUDDY_ELF.");`.
            console.log("Transition action `` for T7__DH1__CALL_BATMAN to T7__DH1__BUDDY_ELF.");
            
            // Step 3: Enter/move towards transition target `T7__DH1__BUDDY_ELF`.
            this._T7__DH1__LOCAL_HELP_enter();
            this._T7__DH1__BUDDY_ELF_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__DH1__BUDDY_ELF;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for T7__DH1__CALL_BATMAN
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH1__CALL_THOR
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH1__CALL_THOR_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH1__CALL_THOR_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._T7__DH1__CALL_THOR_ev1;
        
        // T7__DH1__CALL_THOR behavior
        // uml: enter / { trace("Enter T7__DH1__CALL_THOR."); }
        {
            // Step 1: execute action `trace("Enter T7__DH1__CALL_THOR.");`
            console.log("Enter T7__DH1__CALL_THOR.");
        } // end of behavior for T7__DH1__CALL_THOR
    }
    
    _T7__DH1__CALL_THOR_exit()
    {
        // T7__DH1__CALL_THOR behavior
        // uml: exit / { trace("Exit T7__DH1__CALL_THOR."); }
        {
            // Step 1: execute action `trace("Exit T7__DH1__CALL_THOR.");`
            console.log("Exit T7__DH1__CALL_THOR.");
        } // end of behavior for T7__DH1__CALL_THOR
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH1__HERO_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _T7__DH1__CALL_THOR_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // T7__DH1__CALL_THOR behavior
        // uml: EV1 [trace_guard("State T7__DH1__CALL_THOR: check behavior `EV1 TransitionTo(T7__DH1__CALL_BATMAN)`.", true)] / { trace("Transition action `` for T7__DH1__CALL_THOR to T7__DH1__CALL_BATMAN."); } TransitionTo(T7__DH1__CALL_BATMAN)
        if (trace_guard("State T7__DH1__CALL_THOR: check behavior `EV1 TransitionTo(T7__DH1__CALL_BATMAN)`.", true))
        {
            // Step 1: Exit states until we reach `T7__DH1__HERO` state (Least Common Ancestor for transition).
            this._T7__DH1__CALL_THOR_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH1__CALL_THOR to T7__DH1__CALL_BATMAN.");`.
            console.log("Transition action `` for T7__DH1__CALL_THOR to T7__DH1__CALL_BATMAN.");
            
            // Step 3: Enter/move towards transition target `T7__DH1__CALL_BATMAN`.
            this._T7__DH1__CALL_BATMAN_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__DH1__CALL_BATMAN;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for T7__DH1__CALL_THOR
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH1__LOCAL_HELP
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH1__LOCAL_HELP_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH1__LOCAL_HELP_exit;
        
        // T7__DH1__LOCAL_HELP behavior
        // uml: enter / { trace("Enter T7__DH1__LOCAL_HELP."); }
        {
            // Step 1: execute action `trace("Enter T7__DH1__LOCAL_HELP.");`
            console.log("Enter T7__DH1__LOCAL_HELP.");
        } // end of behavior for T7__DH1__LOCAL_HELP
    }
    
    _T7__DH1__LOCAL_HELP_exit()
    {
        // T7__DH1__LOCAL_HELP behavior
        // uml: exit / { trace("Exit T7__DH1__LOCAL_HELP."); }
        {
            // Step 1: execute action `trace("Exit T7__DH1__LOCAL_HELP.");`
            console.log("Exit T7__DH1__LOCAL_HELP.");
        } // end of behavior for T7__DH1__LOCAL_HELP
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH1__GET_BACKUP_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH1__BUDDY_ELF
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH1__BUDDY_ELF_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH1__BUDDY_ELF_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._T7__DH1__BUDDY_ELF_ev1;
        
        // T7__DH1__BUDDY_ELF behavior
        // uml: enter / { trace("Enter T7__DH1__BUDDY_ELF."); }
        {
            // Step 1: execute action `trace("Enter T7__DH1__BUDDY_ELF.");`
            console.log("Enter T7__DH1__BUDDY_ELF.");
        } // end of behavior for T7__DH1__BUDDY_ELF
        
        // T7__DH1__BUDDY_ELF behavior
        // uml: enter [trace_guard("State T7__DH1__BUDDY_ELF: check behavior `enter / { this.vars.T7__DH1__ALIENS_DETECTED_history = T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__BUDDY_ELF; }`.", true)] / { this.vars.T7__DH1__ALIENS_DETECTED_history = T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__BUDDY_ELF; }
        if (trace_guard("State T7__DH1__BUDDY_ELF: check behavior `enter / { this.vars.T7__DH1__ALIENS_DETECTED_history = T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__BUDDY_ELF; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__DH1__ALIENS_DETECTED_history = T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__BUDDY_ELF;`
            this.vars.T7__DH1__ALIENS_DETECTED_history = Spec2Sm.T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__BUDDY_ELF;
        } // end of behavior for T7__DH1__BUDDY_ELF
        
        // T7__DH1__BUDDY_ELF behavior
        // uml: enter [trace_guard("State T7__DH1__BUDDY_ELF: check behavior `enter / { this.vars.T7__DH1__GET_BACKUP_history = T7__DH1__GET_BACKUP_HistoryId.T7__DH1__BUDDY_ELF; }`.", true)] / { this.vars.T7__DH1__GET_BACKUP_history = T7__DH1__GET_BACKUP_HistoryId.T7__DH1__BUDDY_ELF; }
        if (trace_guard("State T7__DH1__BUDDY_ELF: check behavior `enter / { this.vars.T7__DH1__GET_BACKUP_history = T7__DH1__GET_BACKUP_HistoryId.T7__DH1__BUDDY_ELF; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__DH1__GET_BACKUP_history = T7__DH1__GET_BACKUP_HistoryId.T7__DH1__BUDDY_ELF;`
            this.vars.T7__DH1__GET_BACKUP_history = Spec2Sm.T7__DH1__GET_BACKUP_HistoryId.T7__DH1__BUDDY_ELF;
        } // end of behavior for T7__DH1__BUDDY_ELF
    }
    
    _T7__DH1__BUDDY_ELF_exit()
    {
        // T7__DH1__BUDDY_ELF behavior
        // uml: exit / { trace("Exit T7__DH1__BUDDY_ELF."); }
        {
            // Step 1: execute action `trace("Exit T7__DH1__BUDDY_ELF.");`
            console.log("Exit T7__DH1__BUDDY_ELF.");
        } // end of behavior for T7__DH1__BUDDY_ELF
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH1__LOCAL_HELP_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _T7__DH1__BUDDY_ELF_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // T7__DH1__BUDDY_ELF behavior
        // uml: EV1 [trace_guard("State T7__DH1__BUDDY_ELF: check behavior `EV1 TransitionTo(T7__DH1__POLAR_BEARS)`.", true)] / { trace("Transition action `` for T7__DH1__BUDDY_ELF to T7__DH1__POLAR_BEARS."); } TransitionTo(T7__DH1__POLAR_BEARS)
        if (trace_guard("State T7__DH1__BUDDY_ELF: check behavior `EV1 TransitionTo(T7__DH1__POLAR_BEARS)`.", true))
        {
            // Step 1: Exit states until we reach `T7__DH1__LOCAL_HELP` state (Least Common Ancestor for transition).
            this._T7__DH1__BUDDY_ELF_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH1__BUDDY_ELF to T7__DH1__POLAR_BEARS.");`.
            console.log("Transition action `` for T7__DH1__BUDDY_ELF to T7__DH1__POLAR_BEARS.");
            
            // Step 3: Enter/move towards transition target `T7__DH1__POLAR_BEARS`.
            this._T7__DH1__POLAR_BEARS_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__DH1__POLAR_BEARS;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for T7__DH1__BUDDY_ELF
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH1__POLAR_BEARS
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH1__POLAR_BEARS_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH1__POLAR_BEARS_exit;
        
        // T7__DH1__POLAR_BEARS behavior
        // uml: enter / { trace("Enter T7__DH1__POLAR_BEARS."); }
        {
            // Step 1: execute action `trace("Enter T7__DH1__POLAR_BEARS.");`
            console.log("Enter T7__DH1__POLAR_BEARS.");
        } // end of behavior for T7__DH1__POLAR_BEARS
        
        // T7__DH1__POLAR_BEARS behavior
        // uml: enter [trace_guard("State T7__DH1__POLAR_BEARS: check behavior `enter / { this.vars.T7__DH1__ALIENS_DETECTED_history = T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__POLAR_BEARS; }`.", true)] / { this.vars.T7__DH1__ALIENS_DETECTED_history = T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__POLAR_BEARS; }
        if (trace_guard("State T7__DH1__POLAR_BEARS: check behavior `enter / { this.vars.T7__DH1__ALIENS_DETECTED_history = T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__POLAR_BEARS; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__DH1__ALIENS_DETECTED_history = T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__POLAR_BEARS;`
            this.vars.T7__DH1__ALIENS_DETECTED_history = Spec2Sm.T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__POLAR_BEARS;
        } // end of behavior for T7__DH1__POLAR_BEARS
        
        // T7__DH1__POLAR_BEARS behavior
        // uml: enter [trace_guard("State T7__DH1__POLAR_BEARS: check behavior `enter / { this.vars.T7__DH1__GET_BACKUP_history = T7__DH1__GET_BACKUP_HistoryId.T7__DH1__POLAR_BEARS; }`.", true)] / { this.vars.T7__DH1__GET_BACKUP_history = T7__DH1__GET_BACKUP_HistoryId.T7__DH1__POLAR_BEARS; }
        if (trace_guard("State T7__DH1__POLAR_BEARS: check behavior `enter / { this.vars.T7__DH1__GET_BACKUP_history = T7__DH1__GET_BACKUP_HistoryId.T7__DH1__POLAR_BEARS; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__DH1__GET_BACKUP_history = T7__DH1__GET_BACKUP_HistoryId.T7__DH1__POLAR_BEARS;`
            this.vars.T7__DH1__GET_BACKUP_history = Spec2Sm.T7__DH1__GET_BACKUP_HistoryId.T7__DH1__POLAR_BEARS;
        } // end of behavior for T7__DH1__POLAR_BEARS
    }
    
    _T7__DH1__POLAR_BEARS_exit()
    {
        // T7__DH1__POLAR_BEARS behavior
        // uml: exit / { trace("Exit T7__DH1__POLAR_BEARS."); }
        {
            // Step 1: execute action `trace("Exit T7__DH1__POLAR_BEARS.");`
            console.log("Exit T7__DH1__POLAR_BEARS.");
        } // end of behavior for T7__DH1__POLAR_BEARS
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH1__LOCAL_HELP_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH1__GIVE_COOKIES
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH1__GIVE_COOKIES_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH1__GIVE_COOKIES_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._T7__DH1__GIVE_COOKIES_ev1;
        
        // T7__DH1__GIVE_COOKIES behavior
        // uml: enter / { trace("Enter T7__DH1__GIVE_COOKIES."); }
        {
            // Step 1: execute action `trace("Enter T7__DH1__GIVE_COOKIES.");`
            console.log("Enter T7__DH1__GIVE_COOKIES.");
        } // end of behavior for T7__DH1__GIVE_COOKIES
        
        // T7__DH1__GIVE_COOKIES behavior
        // uml: enter [trace_guard("State T7__DH1__GIVE_COOKIES: check behavior `enter / { this.vars.T7__DH1__ALIENS_DETECTED_history = T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__GIVE_COOKIES; }`.", true)] / { this.vars.T7__DH1__ALIENS_DETECTED_history = T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__GIVE_COOKIES; }
        if (trace_guard("State T7__DH1__GIVE_COOKIES: check behavior `enter / { this.vars.T7__DH1__ALIENS_DETECTED_history = T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__GIVE_COOKIES; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__DH1__ALIENS_DETECTED_history = T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__GIVE_COOKIES;`
            this.vars.T7__DH1__ALIENS_DETECTED_history = Spec2Sm.T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__GIVE_COOKIES;
        } // end of behavior for T7__DH1__GIVE_COOKIES
    }
    
    _T7__DH1__GIVE_COOKIES_exit()
    {
        // T7__DH1__GIVE_COOKIES behavior
        // uml: exit / { trace("Exit T7__DH1__GIVE_COOKIES."); }
        {
            // Step 1: execute action `trace("Exit T7__DH1__GIVE_COOKIES.");`
            console.log("Exit T7__DH1__GIVE_COOKIES.");
        } // end of behavior for T7__DH1__GIVE_COOKIES
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH1__ALIENS_DETECTED_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _T7__DH1__GIVE_COOKIES_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // T7__DH1__GIVE_COOKIES behavior
        // uml: EV1 [trace_guard("State T7__DH1__GIVE_COOKIES: check behavior `EV1 TransitionTo(T7__DH1__CALL_THOR)`.", true)] / { trace("Transition action `` for T7__DH1__GIVE_COOKIES to T7__DH1__CALL_THOR."); } TransitionTo(T7__DH1__CALL_THOR)
        if (trace_guard("State T7__DH1__GIVE_COOKIES: check behavior `EV1 TransitionTo(T7__DH1__CALL_THOR)`.", true))
        {
            // Step 1: Exit states until we reach `T7__DH1__ALIENS_DETECTED` state (Least Common Ancestor for transition).
            this._T7__DH1__GIVE_COOKIES_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH1__GIVE_COOKIES to T7__DH1__CALL_THOR.");`.
            console.log("Transition action `` for T7__DH1__GIVE_COOKIES to T7__DH1__CALL_THOR.");
            
            // Step 3: Enter/move towards transition target `T7__DH1__CALL_THOR`.
            this._T7__DH1__GET_BACKUP_enter();
            this._T7__DH1__HERO_enter();
            this._T7__DH1__CALL_THOR_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__DH1__CALL_THOR;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for T7__DH1__GIVE_COOKIES
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH1__SNOWBALL_FIGHT
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH1__SNOWBALL_FIGHT_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH1__SNOWBALL_FIGHT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._T7__DH1__SNOWBALL_FIGHT_ev1;
        
        // T7__DH1__SNOWBALL_FIGHT behavior
        // uml: enter / { trace("Enter T7__DH1__SNOWBALL_FIGHT."); }
        {
            // Step 1: execute action `trace("Enter T7__DH1__SNOWBALL_FIGHT.");`
            console.log("Enter T7__DH1__SNOWBALL_FIGHT.");
        } // end of behavior for T7__DH1__SNOWBALL_FIGHT
        
        // T7__DH1__SNOWBALL_FIGHT behavior
        // uml: enter [trace_guard("State T7__DH1__SNOWBALL_FIGHT: check behavior `enter / { this.vars.T7__DH1__ALIENS_DETECTED_history = T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__SNOWBALL_FIGHT; }`.", true)] / { this.vars.T7__DH1__ALIENS_DETECTED_history = T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__SNOWBALL_FIGHT; }
        if (trace_guard("State T7__DH1__SNOWBALL_FIGHT: check behavior `enter / { this.vars.T7__DH1__ALIENS_DETECTED_history = T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__SNOWBALL_FIGHT; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__DH1__ALIENS_DETECTED_history = T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__SNOWBALL_FIGHT;`
            this.vars.T7__DH1__ALIENS_DETECTED_history = Spec2Sm.T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__SNOWBALL_FIGHT;
        } // end of behavior for T7__DH1__SNOWBALL_FIGHT
    }
    
    _T7__DH1__SNOWBALL_FIGHT_exit()
    {
        // T7__DH1__SNOWBALL_FIGHT behavior
        // uml: exit / { trace("Exit T7__DH1__SNOWBALL_FIGHT."); }
        {
            // Step 1: execute action `trace("Exit T7__DH1__SNOWBALL_FIGHT.");`
            console.log("Exit T7__DH1__SNOWBALL_FIGHT.");
        } // end of behavior for T7__DH1__SNOWBALL_FIGHT
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH1__ALIENS_DETECTED_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _T7__DH1__SNOWBALL_FIGHT_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // T7__DH1__SNOWBALL_FIGHT behavior
        // uml: EV1 [trace_guard("State T7__DH1__SNOWBALL_FIGHT: check behavior `EV1 TransitionTo(T7__DH1__GIVE_COOKIES)`.", true)] / { trace("Transition action `` for T7__DH1__SNOWBALL_FIGHT to T7__DH1__GIVE_COOKIES."); } TransitionTo(T7__DH1__GIVE_COOKIES)
        if (trace_guard("State T7__DH1__SNOWBALL_FIGHT: check behavior `EV1 TransitionTo(T7__DH1__GIVE_COOKIES)`.", true))
        {
            // Step 1: Exit states until we reach `T7__DH1__ALIENS_DETECTED` state (Least Common Ancestor for transition).
            this._T7__DH1__SNOWBALL_FIGHT_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH1__SNOWBALL_FIGHT to T7__DH1__GIVE_COOKIES.");`.
            console.log("Transition action `` for T7__DH1__SNOWBALL_FIGHT to T7__DH1__GIVE_COOKIES.");
            
            // Step 3: Enter/move towards transition target `T7__DH1__GIVE_COOKIES`.
            this._T7__DH1__GIVE_COOKIES_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__DH1__GIVE_COOKIES;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for T7__DH1__SNOWBALL_FIGHT
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH1__BUILD
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH1__BUILD_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH1__BUILD_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV6] = this._T7__DH1__BUILD_ev6;
        this._currentEventHandlers[Spec2Sm.EventId.EV7] = this._T7__DH1__BUILD_ev7;
        
        // T7__DH1__BUILD behavior
        // uml: enter / { trace("Enter T7__DH1__BUILD."); }
        {
            // Step 1: execute action `trace("Enter T7__DH1__BUILD.");`
            console.log("Enter T7__DH1__BUILD.");
        } // end of behavior for T7__DH1__BUILD
    }
    
    _T7__DH1__BUILD_exit()
    {
        // T7__DH1__BUILD behavior
        // uml: exit / { trace("Exit T7__DH1__BUILD."); }
        {
            // Step 1: execute action `trace("Exit T7__DH1__BUILD.");`
            console.log("Exit T7__DH1__BUILD.");
        } // end of behavior for T7__DH1__BUILD
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH1__SANTAS_WORKSHOP_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV6] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV7] = null;  // no ancestor listens to this event
    }
    
    _T7__DH1__BUILD_ev6()
    {
        // No ancestor state handles `ev6` event.
        
        // T7__DH1__BUILD behavior
        // uml: EV6 [trace_guard("State T7__DH1__BUILD: check behavior `EV6 TransitionTo(T7__DH1__ALIENS_DETECTED)`.", true)] / { trace("Transition action `` for T7__DH1__BUILD to T7__DH1__ALIENS_DETECTED."); } TransitionTo(T7__DH1__ALIENS_DETECTED)
        if (trace_guard("State T7__DH1__BUILD: check behavior `EV6 TransitionTo(T7__DH1__ALIENS_DETECTED)`.", true))
        {
            // Step 1: Exit states until we reach `T7__DH1__SANTAS_WORKSHOP` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._T7__DH1__SANTAS_WORKSHOP_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH1__BUILD to T7__DH1__ALIENS_DETECTED.");`.
            console.log("Transition action `` for T7__DH1__BUILD to T7__DH1__ALIENS_DETECTED.");
            
            // Step 3: Enter/move towards transition target `T7__DH1__ALIENS_DETECTED`.
            this._T7__DH1__ALIENS_DETECTED_enter();
            
            // T7__DH1__ALIENS_DETECTED.InitialState behavior
            // uml: / { trace("Transition action `` for T7__DH1__ALIENS_DETECTED.InitialState to T7__DH1__ALIENS_DETECTED.History."); } TransitionTo(T7__DH1__ALIENS_DETECTED.History)
            {
                // Step 1: Exit states until we reach `T7__DH1__ALIENS_DETECTED` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__DH1__ALIENS_DETECTED.InitialState to T7__DH1__ALIENS_DETECTED.History.");`.
                console.log("Transition action `` for T7__DH1__ALIENS_DETECTED.InitialState to T7__DH1__ALIENS_DETECTED.History.");
                
                // Step 3: Enter/move towards transition target `T7__DH1__ALIENS_DETECTED.History`.
                // T7__DH1__ALIENS_DETECTED.History is a pseudo state and cannot have an `enter` trigger.
                
                // T7__DH1__ALIENS_DETECTED.History behavior
                // uml: [this.vars.T7__DH1__ALIENS_DETECTED_history == T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__GIVE_COOKIES] / { trace("Transition action `` for T7__DH1__ALIENS_DETECTED.History to T7__DH1__GIVE_COOKIES."); } TransitionTo(T7__DH1__GIVE_COOKIES)
                if (this.vars.T7__DH1__ALIENS_DETECTED_history == Spec2Sm.T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__GIVE_COOKIES)
                {
                    // Step 1: Exit states until we reach `T7__DH1__ALIENS_DETECTED` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                    
                    // Step 2: Transition action: `trace("Transition action `` for T7__DH1__ALIENS_DETECTED.History to T7__DH1__GIVE_COOKIES.");`.
                    trace("Transition action `` for T7__DH1__ALIENS_DETECTED.History to T7__DH1__GIVE_COOKIES.");
                    
                    // Step 3: Enter/move towards transition target `T7__DH1__GIVE_COOKIES`.
                    this._T7__DH1__GIVE_COOKIES_enter();
                    
                    // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                    this.stateId = Spec2Sm.StateId.T7__DH1__GIVE_COOKIES;
                    // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                    return;
                } // end of behavior for T7__DH1__ALIENS_DETECTED.History
                
                // T7__DH1__ALIENS_DETECTED.History behavior
                // uml: [this.vars.T7__DH1__ALIENS_DETECTED_history == T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__HERO] / { trace("Transition action `` for T7__DH1__ALIENS_DETECTED.History to T7__DH1__HERO."); } TransitionTo(T7__DH1__HERO)
                if (this.vars.T7__DH1__ALIENS_DETECTED_history == Spec2Sm.T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__HERO)
                {
                    // Step 1: Exit states until we reach `T7__DH1__ALIENS_DETECTED` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                    
                    // Step 2: Transition action: `trace("Transition action `` for T7__DH1__ALIENS_DETECTED.History to T7__DH1__HERO.");`.
                    trace("Transition action `` for T7__DH1__ALIENS_DETECTED.History to T7__DH1__HERO.");
                    
                    // Step 3: Enter/move towards transition target `T7__DH1__HERO`.
                    this._T7__DH1__GET_BACKUP_enter();
                    this._T7__DH1__HERO_enter();
                    
                    // Finish transition by calling pseudo state transition function.
                    this._T7__DH1__HERO_InitialState_transition();
                    return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
                } // end of behavior for T7__DH1__ALIENS_DETECTED.History
                
                // T7__DH1__ALIENS_DETECTED.History behavior
                // uml: [this.vars.T7__DH1__ALIENS_DETECTED_history == T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__BUDDY_ELF] / { trace("Transition action `` for T7__DH1__ALIENS_DETECTED.History to T7__DH1__BUDDY_ELF."); } TransitionTo(T7__DH1__BUDDY_ELF)
                if (this.vars.T7__DH1__ALIENS_DETECTED_history == Spec2Sm.T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__BUDDY_ELF)
                {
                    // Step 1: Exit states until we reach `T7__DH1__ALIENS_DETECTED` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                    
                    // Step 2: Transition action: `trace("Transition action `` for T7__DH1__ALIENS_DETECTED.History to T7__DH1__BUDDY_ELF.");`.
                    trace("Transition action `` for T7__DH1__ALIENS_DETECTED.History to T7__DH1__BUDDY_ELF.");
                    
                    // Step 3: Enter/move towards transition target `T7__DH1__BUDDY_ELF`.
                    this._T7__DH1__GET_BACKUP_enter();
                    this._T7__DH1__LOCAL_HELP_enter();
                    this._T7__DH1__BUDDY_ELF_enter();
                    
                    // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                    this.stateId = Spec2Sm.StateId.T7__DH1__BUDDY_ELF;
                    // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                    return;
                } // end of behavior for T7__DH1__ALIENS_DETECTED.History
                
                // T7__DH1__ALIENS_DETECTED.History behavior
                // uml: [this.vars.T7__DH1__ALIENS_DETECTED_history == T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__POLAR_BEARS] / { trace("Transition action `` for T7__DH1__ALIENS_DETECTED.History to T7__DH1__POLAR_BEARS."); } TransitionTo(T7__DH1__POLAR_BEARS)
                if (this.vars.T7__DH1__ALIENS_DETECTED_history == Spec2Sm.T7__DH1__ALIENS_DETECTED_HistoryId.T7__DH1__POLAR_BEARS)
                {
                    // Step 1: Exit states until we reach `T7__DH1__ALIENS_DETECTED` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                    
                    // Step 2: Transition action: `trace("Transition action `` for T7__DH1__ALIENS_DETECTED.History to T7__DH1__POLAR_BEARS.");`.
                    trace("Transition action `` for T7__DH1__ALIENS_DETECTED.History to T7__DH1__POLAR_BEARS.");
                    
                    // Step 3: Enter/move towards transition target `T7__DH1__POLAR_BEARS`.
                    this._T7__DH1__GET_BACKUP_enter();
                    this._T7__DH1__LOCAL_HELP_enter();
                    this._T7__DH1__POLAR_BEARS_enter();
                    
                    // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                    this.stateId = Spec2Sm.StateId.T7__DH1__POLAR_BEARS;
                    // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                    return;
                } // end of behavior for T7__DH1__ALIENS_DETECTED.History
                
                // T7__DH1__ALIENS_DETECTED.History behavior
                // uml: else / { trace("Transition action `` for T7__DH1__ALIENS_DETECTED.History to T7__DH1__SNOWBALL_FIGHT."); } TransitionTo(T7__DH1__SNOWBALL_FIGHT)
                {
                    // Step 1: Exit states until we reach `T7__DH1__ALIENS_DETECTED` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                    
                    // Step 2: Transition action: `trace("Transition action `` for T7__DH1__ALIENS_DETECTED.History to T7__DH1__SNOWBALL_FIGHT.");`.
                    console.log("Transition action `` for T7__DH1__ALIENS_DETECTED.History to T7__DH1__SNOWBALL_FIGHT.");
                    
                    // Step 3: Enter/move towards transition target `T7__DH1__SNOWBALL_FIGHT`.
                    this._T7__DH1__SNOWBALL_FIGHT_enter();
                    
                    // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                    this.stateId = Spec2Sm.StateId.T7__DH1__SNOWBALL_FIGHT;
                    // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                    return;
                } // end of behavior for T7__DH1__ALIENS_DETECTED.History
            } // end of behavior for T7__DH1__ALIENS_DETECTED.InitialState
        } // end of behavior for T7__DH1__BUILD
    }
    
    _T7__DH1__BUILD_ev7()
    {
        // No ancestor state handles `ev7` event.
        
        // T7__DH1__BUILD behavior
        // uml: EV7 [trace_guard("State T7__DH1__BUILD: check behavior `EV7 TransitionTo(T7__DH1__GET_BACKUP.History)`.", true)] / { trace("Transition action `` for T7__DH1__BUILD to T7__DH1__GET_BACKUP.History."); } TransitionTo(T7__DH1__GET_BACKUP.History)
        if (trace_guard("State T7__DH1__BUILD: check behavior `EV7 TransitionTo(T7__DH1__GET_BACKUP.History)`.", true))
        {
            // Step 1: Exit states until we reach `T7__DH1__SANTAS_WORKSHOP` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._T7__DH1__SANTAS_WORKSHOP_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH1__BUILD to T7__DH1__GET_BACKUP.History.");`.
            console.log("Transition action `` for T7__DH1__BUILD to T7__DH1__GET_BACKUP.History.");
            
            // Step 3: Enter/move towards transition target `T7__DH1__GET_BACKUP.History`.
            this._T7__DH1__ALIENS_DETECTED_enter();
            this._T7__DH1__GET_BACKUP_enter();
            // T7__DH1__GET_BACKUP.History is a pseudo state and cannot have an `enter` trigger.
            
            // T7__DH1__GET_BACKUP.History behavior
            // uml: [this.vars.T7__DH1__GET_BACKUP_history == T7__DH1__GET_BACKUP_HistoryId.T7__DH1__HERO] / { trace("Transition action `` for T7__DH1__GET_BACKUP.History to T7__DH1__HERO."); } TransitionTo(T7__DH1__HERO)
            if (this.vars.T7__DH1__GET_BACKUP_history == Spec2Sm.T7__DH1__GET_BACKUP_HistoryId.T7__DH1__HERO)
            {
                // Step 1: Exit states until we reach `T7__DH1__GET_BACKUP` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__DH1__GET_BACKUP.History to T7__DH1__HERO.");`.
                trace("Transition action `` for T7__DH1__GET_BACKUP.History to T7__DH1__HERO.");
                
                // Step 3: Enter/move towards transition target `T7__DH1__HERO`.
                this._T7__DH1__HERO_enter();
                
                // Finish transition by calling pseudo state transition function.
                this._T7__DH1__HERO_InitialState_transition();
                return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
            } // end of behavior for T7__DH1__GET_BACKUP.History
            
            // T7__DH1__GET_BACKUP.History behavior
            // uml: [this.vars.T7__DH1__GET_BACKUP_history == T7__DH1__GET_BACKUP_HistoryId.T7__DH1__BUDDY_ELF] / { trace("Transition action `` for T7__DH1__GET_BACKUP.History to T7__DH1__BUDDY_ELF."); } TransitionTo(T7__DH1__BUDDY_ELF)
            if (this.vars.T7__DH1__GET_BACKUP_history == Spec2Sm.T7__DH1__GET_BACKUP_HistoryId.T7__DH1__BUDDY_ELF)
            {
                // Step 1: Exit states until we reach `T7__DH1__GET_BACKUP` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__DH1__GET_BACKUP.History to T7__DH1__BUDDY_ELF.");`.
                trace("Transition action `` for T7__DH1__GET_BACKUP.History to T7__DH1__BUDDY_ELF.");
                
                // Step 3: Enter/move towards transition target `T7__DH1__BUDDY_ELF`.
                this._T7__DH1__LOCAL_HELP_enter();
                this._T7__DH1__BUDDY_ELF_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.T7__DH1__BUDDY_ELF;
                // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                return;
            } // end of behavior for T7__DH1__GET_BACKUP.History
            
            // T7__DH1__GET_BACKUP.History behavior
            // uml: [this.vars.T7__DH1__GET_BACKUP_history == T7__DH1__GET_BACKUP_HistoryId.T7__DH1__POLAR_BEARS] / { trace("Transition action `` for T7__DH1__GET_BACKUP.History to T7__DH1__POLAR_BEARS."); } TransitionTo(T7__DH1__POLAR_BEARS)
            if (this.vars.T7__DH1__GET_BACKUP_history == Spec2Sm.T7__DH1__GET_BACKUP_HistoryId.T7__DH1__POLAR_BEARS)
            {
                // Step 1: Exit states until we reach `T7__DH1__GET_BACKUP` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__DH1__GET_BACKUP.History to T7__DH1__POLAR_BEARS.");`.
                trace("Transition action `` for T7__DH1__GET_BACKUP.History to T7__DH1__POLAR_BEARS.");
                
                // Step 3: Enter/move towards transition target `T7__DH1__POLAR_BEARS`.
                this._T7__DH1__LOCAL_HELP_enter();
                this._T7__DH1__POLAR_BEARS_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.T7__DH1__POLAR_BEARS;
                // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                return;
            } // end of behavior for T7__DH1__GET_BACKUP.History
            
            // T7__DH1__GET_BACKUP.History behavior
            // uml: else / { trace("Transition action `` for T7__DH1__GET_BACKUP.History to T7__DH1__GET_BACKUP.ChoicePoint()."); } TransitionTo(T7__DH1__GET_BACKUP.ChoicePoint())
            {
                // Step 1: Exit states until we reach `T7__DH1__GET_BACKUP` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__DH1__GET_BACKUP.History to T7__DH1__GET_BACKUP.ChoicePoint().");`.
                console.log("Transition action `` for T7__DH1__GET_BACKUP.History to T7__DH1__GET_BACKUP.ChoicePoint().");
                
                // Step 3: Enter/move towards transition target `T7__DH1__GET_BACKUP.ChoicePoint()`.
                // T7__DH1__GET_BACKUP.ChoicePoint() is a pseudo state and cannot have an `enter` trigger.
                
                // T7__DH1__GET_BACKUP.ChoicePoint() behavior
                // uml: / { trace("Transition action `` for T7__DH1__GET_BACKUP.ChoicePoint() to T7__DH1__HERO."); } TransitionTo(T7__DH1__HERO)
                {
                    // Step 1: Exit states until we reach `T7__DH1__GET_BACKUP` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                    
                    // Step 2: Transition action: `trace("Transition action `` for T7__DH1__GET_BACKUP.ChoicePoint() to T7__DH1__HERO.");`.
                    console.log("Transition action `` for T7__DH1__GET_BACKUP.ChoicePoint() to T7__DH1__HERO.");
                    
                    // Step 3: Enter/move towards transition target `T7__DH1__HERO`.
                    this._T7__DH1__HERO_enter();
                    
                    // Finish transition by calling pseudo state transition function.
                    this._T7__DH1__HERO_InitialState_transition();
                    return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
                } // end of behavior for T7__DH1__GET_BACKUP.ChoicePoint()
            } // end of behavior for T7__DH1__GET_BACKUP.History
        } // end of behavior for T7__DH1__BUILD
    }
    
    _T7__DH1__BUILD_InitialState_transition()
    {
        // T7__DH1__BUILD.InitialState behavior
        // uml: / { trace("Transition action `` for T7__DH1__BUILD.InitialState to T7__DH1__BUILD.History."); } TransitionTo(T7__DH1__BUILD.History)
        {
            // Step 1: Exit states until we reach `T7__DH1__BUILD` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH1__BUILD.InitialState to T7__DH1__BUILD.History.");`.
            console.log("Transition action `` for T7__DH1__BUILD.InitialState to T7__DH1__BUILD.History.");
            
            // Step 3: Enter/move towards transition target `T7__DH1__BUILD.History`.
            // T7__DH1__BUILD.History is a pseudo state and cannot have an `enter` trigger.
            
            // T7__DH1__BUILD.History behavior
            // uml: [this.vars.T7__DH1__BUILD_history == T7__DH1__BUILD_HistoryId.T7__DH1__TOOL] / { trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__TOOL."); } TransitionTo(T7__DH1__TOOL)
            if (this.vars.T7__DH1__BUILD_history == Spec2Sm.T7__DH1__BUILD_HistoryId.T7__DH1__TOOL)
            {
                // Step 1: Exit states until we reach `T7__DH1__BUILD` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__TOOL.");`.
                trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__TOOL.");
                
                // Step 3: Enter/move towards transition target `T7__DH1__TOOL`.
                this._T7__DH1__TOOL_enter();
                
                // Finish transition by calling pseudo state transition function.
                this._T7__DH1__TOOL_InitialState_transition();
                return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
            } // end of behavior for T7__DH1__BUILD.History
            
            // T7__DH1__BUILD.History behavior
            // uml: [this.vars.T7__DH1__BUILD_history == T7__DH1__BUILD_HistoryId.T7__DH1__RACE_CAR] / { trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__RACE_CAR."); } TransitionTo(T7__DH1__RACE_CAR)
            if (this.vars.T7__DH1__BUILD_history == Spec2Sm.T7__DH1__BUILD_HistoryId.T7__DH1__RACE_CAR)
            {
                // Step 1: Exit states until we reach `T7__DH1__BUILD` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__RACE_CAR.");`.
                trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__RACE_CAR.");
                
                // Step 3: Enter/move towards transition target `T7__DH1__RACE_CAR`.
                this._T7__DH1__TOY_enter();
                this._T7__DH1__RACE_CAR_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.T7__DH1__RACE_CAR;
                this._ancestorEventHandler = null;
                return;
            } // end of behavior for T7__DH1__BUILD.History
            
            // T7__DH1__BUILD.History behavior
            // uml: [this.vars.T7__DH1__BUILD_history == T7__DH1__BUILD_HistoryId.T7__DH1__TEDDY_BEAR] / { trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__TEDDY_BEAR."); } TransitionTo(T7__DH1__TEDDY_BEAR)
            if (this.vars.T7__DH1__BUILD_history == Spec2Sm.T7__DH1__BUILD_HistoryId.T7__DH1__TEDDY_BEAR)
            {
                // Step 1: Exit states until we reach `T7__DH1__BUILD` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__TEDDY_BEAR.");`.
                trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__TEDDY_BEAR.");
                
                // Step 3: Enter/move towards transition target `T7__DH1__TEDDY_BEAR`.
                this._T7__DH1__TOY_enter();
                this._T7__DH1__TEDDY_BEAR_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.T7__DH1__TEDDY_BEAR;
                this._ancestorEventHandler = null;
                return;
            } // end of behavior for T7__DH1__BUILD.History
            
            // T7__DH1__BUILD.History behavior
            // uml: [this.vars.T7__DH1__BUILD_history == T7__DH1__BUILD_HistoryId.T7__DH1__GLOW_WORM] / { trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__GLOW_WORM."); } TransitionTo(T7__DH1__GLOW_WORM)
            if (this.vars.T7__DH1__BUILD_history == Spec2Sm.T7__DH1__BUILD_HistoryId.T7__DH1__GLOW_WORM)
            {
                // Step 1: Exit states until we reach `T7__DH1__BUILD` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__GLOW_WORM.");`.
                trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__GLOW_WORM.");
                
                // Step 3: Enter/move towards transition target `T7__DH1__GLOW_WORM`.
                this._T7__DH1__TOY_enter();
                this._T7__DH1__GLOW_WORM_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.T7__DH1__GLOW_WORM;
                this._ancestorEventHandler = null;
                return;
            } // end of behavior for T7__DH1__BUILD.History
            
            // T7__DH1__BUILD.History behavior
            // uml: [this.vars.T7__DH1__BUILD_history == T7__DH1__BUILD_HistoryId.T7__DH1__ROBOT] / { trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__ROBOT."); } TransitionTo(T7__DH1__ROBOT)
            if (this.vars.T7__DH1__BUILD_history == Spec2Sm.T7__DH1__BUILD_HistoryId.T7__DH1__ROBOT)
            {
                // Step 1: Exit states until we reach `T7__DH1__BUILD` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__ROBOT.");`.
                trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__ROBOT.");
                
                // Step 3: Enter/move towards transition target `T7__DH1__ROBOT`.
                this._T7__DH1__TOY_enter();
                this._T7__DH1__ROBOT_enter();
                
                // Finish transition by calling pseudo state transition function.
                this._T7__DH1__ROBOT_InitialState_transition();
                return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
            } // end of behavior for T7__DH1__BUILD.History
            
            // T7__DH1__BUILD.History behavior
            // uml: [this.vars.T7__DH1__BUILD_history == T7__DH1__BUILD_HistoryId.T7__DH1__BATTLEBOT] / { trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__BATTLEBOT."); } TransitionTo(T7__DH1__BATTLEBOT)
            if (this.vars.T7__DH1__BUILD_history == Spec2Sm.T7__DH1__BUILD_HistoryId.T7__DH1__BATTLEBOT)
            {
                // Step 1: Exit states until we reach `T7__DH1__BUILD` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__BATTLEBOT.");`.
                trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__BATTLEBOT.");
                
                // Step 3: Enter/move towards transition target `T7__DH1__BATTLEBOT`.
                this._T7__DH1__TOY_enter();
                this._T7__DH1__ROBOT_enter();
                this._T7__DH1__BATTLEBOT_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.T7__DH1__BATTLEBOT;
                this._ancestorEventHandler = null;
                return;
            } // end of behavior for T7__DH1__BUILD.History
            
            // T7__DH1__BUILD.History behavior
            // uml: [this.vars.T7__DH1__BUILD_history == T7__DH1__BUILD_HistoryId.T7__DH1__WALL_E] / { trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__WALL_E."); } TransitionTo(T7__DH1__WALL_E)
            if (this.vars.T7__DH1__BUILD_history == Spec2Sm.T7__DH1__BUILD_HistoryId.T7__DH1__WALL_E)
            {
                // Step 1: Exit states until we reach `T7__DH1__BUILD` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__WALL_E.");`.
                trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__WALL_E.");
                
                // Step 3: Enter/move towards transition target `T7__DH1__WALL_E`.
                this._T7__DH1__TOY_enter();
                this._T7__DH1__ROBOT_enter();
                this._T7__DH1__WALL_E_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.T7__DH1__WALL_E;
                this._ancestorEventHandler = null;
                return;
            } // end of behavior for T7__DH1__BUILD.History
            
            // T7__DH1__BUILD.History behavior
            // uml: [this.vars.T7__DH1__BUILD_history == T7__DH1__BUILD_HistoryId.T7__DH1__IMPACT_DRILL] / { trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__IMPACT_DRILL."); } TransitionTo(T7__DH1__IMPACT_DRILL)
            if (this.vars.T7__DH1__BUILD_history == Spec2Sm.T7__DH1__BUILD_HistoryId.T7__DH1__IMPACT_DRILL)
            {
                // Step 1: Exit states until we reach `T7__DH1__BUILD` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__IMPACT_DRILL.");`.
                trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__IMPACT_DRILL.");
                
                // Step 3: Enter/move towards transition target `T7__DH1__IMPACT_DRILL`.
                this._T7__DH1__TOOL_enter();
                this._T7__DH1__IMPACT_DRILL_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.T7__DH1__IMPACT_DRILL;
                this._ancestorEventHandler = null;
                return;
            } // end of behavior for T7__DH1__BUILD.History
            
            // T7__DH1__BUILD.History behavior
            // uml: [this.vars.T7__DH1__BUILD_history == T7__DH1__BUILD_HistoryId.T7__DH1__CIRCULAR_SAW] / { trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__CIRCULAR_SAW."); } TransitionTo(T7__DH1__CIRCULAR_SAW)
            if (this.vars.T7__DH1__BUILD_history == Spec2Sm.T7__DH1__BUILD_HistoryId.T7__DH1__CIRCULAR_SAW)
            {
                // Step 1: Exit states until we reach `T7__DH1__BUILD` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__CIRCULAR_SAW.");`.
                trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__CIRCULAR_SAW.");
                
                // Step 3: Enter/move towards transition target `T7__DH1__CIRCULAR_SAW`.
                this._T7__DH1__TOOL_enter();
                this._T7__DH1__CIRCULAR_SAW_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.T7__DH1__CIRCULAR_SAW;
                this._ancestorEventHandler = null;
                return;
            } // end of behavior for T7__DH1__BUILD.History
            
            // T7__DH1__BUILD.History behavior
            // uml: else / { trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__TOY."); } TransitionTo(T7__DH1__TOY)
            {
                // Step 1: Exit states until we reach `T7__DH1__BUILD` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__DH1__BUILD.History to T7__DH1__TOY.");`.
                console.log("Transition action `` for T7__DH1__BUILD.History to T7__DH1__TOY.");
                
                // Step 3: Enter/move towards transition target `T7__DH1__TOY`.
                this._T7__DH1__TOY_enter();
                
                // Finish transition by calling pseudo state transition function.
                this._T7__DH1__TOY_InitialState_transition();
                return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
            } // end of behavior for T7__DH1__BUILD.History
        } // end of behavior for T7__DH1__BUILD.InitialState
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH1__TOOL
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH1__TOOL_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH1__TOOL_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = this._T7__DH1__TOOL_ev2;
        
        // T7__DH1__TOOL behavior
        // uml: enter / { trace("Enter T7__DH1__TOOL."); }
        {
            // Step 1: execute action `trace("Enter T7__DH1__TOOL.");`
            console.log("Enter T7__DH1__TOOL.");
        } // end of behavior for T7__DH1__TOOL
        
        // T7__DH1__TOOL behavior
        // uml: enter [trace_guard("State T7__DH1__TOOL: check behavior `enter / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__TOOL; }`.", true)] / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__TOOL; }
        if (trace_guard("State T7__DH1__TOOL: check behavior `enter / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__TOOL; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__TOOL;`
            this.vars.T7__DH1__BUILD_history = Spec2Sm.T7__DH1__BUILD_HistoryId.T7__DH1__TOOL;
        } // end of behavior for T7__DH1__TOOL
    }
    
    _T7__DH1__TOOL_exit()
    {
        // T7__DH1__TOOL behavior
        // uml: exit / { trace("Exit T7__DH1__TOOL."); }
        {
            // Step 1: execute action `trace("Exit T7__DH1__TOOL.");`
            console.log("Exit T7__DH1__TOOL.");
        } // end of behavior for T7__DH1__TOOL
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH1__BUILD_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = null;  // no ancestor listens to this event
    }
    
    _T7__DH1__TOOL_ev2()
    {
        // No ancestor state handles `ev2` event.
        
        // T7__DH1__TOOL behavior
        // uml: EV2 [trace_guard("State T7__DH1__TOOL: check behavior `EV2 TransitionTo(T7__DH1__TOY)`.", true)] / { trace("Transition action `` for T7__DH1__TOOL to T7__DH1__TOY."); } TransitionTo(T7__DH1__TOY)
        if (trace_guard("State T7__DH1__TOOL: check behavior `EV2 TransitionTo(T7__DH1__TOY)`.", true))
        {
            // Step 1: Exit states until we reach `T7__DH1__BUILD` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._T7__DH1__BUILD_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH1__TOOL to T7__DH1__TOY.");`.
            console.log("Transition action `` for T7__DH1__TOOL to T7__DH1__TOY.");
            
            // Step 3: Enter/move towards transition target `T7__DH1__TOY`.
            this._T7__DH1__TOY_enter();
            
            // Finish transition by calling pseudo state transition function.
            this._T7__DH1__TOY_InitialState_transition();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for T7__DH1__TOOL
    }
    
    _T7__DH1__TOOL_InitialState_transition()
    {
        // T7__DH1__TOOL.InitialState behavior
        // uml: / { trace("Transition action `` for T7__DH1__TOOL.InitialState to T7__DH1__IMPACT_DRILL."); } TransitionTo(T7__DH1__IMPACT_DRILL)
        {
            // Step 1: Exit states until we reach `T7__DH1__TOOL` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH1__TOOL.InitialState to T7__DH1__IMPACT_DRILL.");`.
            console.log("Transition action `` for T7__DH1__TOOL.InitialState to T7__DH1__IMPACT_DRILL.");
            
            // Step 3: Enter/move towards transition target `T7__DH1__IMPACT_DRILL`.
            this._T7__DH1__IMPACT_DRILL_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__DH1__IMPACT_DRILL;
            this._ancestorEventHandler = null;
            return;
        } // end of behavior for T7__DH1__TOOL.InitialState
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH1__CIRCULAR_SAW
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH1__CIRCULAR_SAW_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH1__CIRCULAR_SAW_exit;
        
        // T7__DH1__CIRCULAR_SAW behavior
        // uml: enter / { trace("Enter T7__DH1__CIRCULAR_SAW."); }
        {
            // Step 1: execute action `trace("Enter T7__DH1__CIRCULAR_SAW.");`
            console.log("Enter T7__DH1__CIRCULAR_SAW.");
        } // end of behavior for T7__DH1__CIRCULAR_SAW
        
        // T7__DH1__CIRCULAR_SAW behavior
        // uml: enter [trace_guard("State T7__DH1__CIRCULAR_SAW: check behavior `enter / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__CIRCULAR_SAW; }`.", true)] / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__CIRCULAR_SAW; }
        if (trace_guard("State T7__DH1__CIRCULAR_SAW: check behavior `enter / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__CIRCULAR_SAW; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__CIRCULAR_SAW;`
            this.vars.T7__DH1__BUILD_history = Spec2Sm.T7__DH1__BUILD_HistoryId.T7__DH1__CIRCULAR_SAW;
        } // end of behavior for T7__DH1__CIRCULAR_SAW
    }
    
    _T7__DH1__CIRCULAR_SAW_exit()
    {
        // T7__DH1__CIRCULAR_SAW behavior
        // uml: exit / { trace("Exit T7__DH1__CIRCULAR_SAW."); }
        {
            // Step 1: execute action `trace("Exit T7__DH1__CIRCULAR_SAW.");`
            console.log("Exit T7__DH1__CIRCULAR_SAW.");
        } // end of behavior for T7__DH1__CIRCULAR_SAW
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH1__TOOL_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH1__IMPACT_DRILL
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH1__IMPACT_DRILL_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH1__IMPACT_DRILL_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._T7__DH1__IMPACT_DRILL_ev1;
        
        // T7__DH1__IMPACT_DRILL behavior
        // uml: enter / { trace("Enter T7__DH1__IMPACT_DRILL."); }
        {
            // Step 1: execute action `trace("Enter T7__DH1__IMPACT_DRILL.");`
            console.log("Enter T7__DH1__IMPACT_DRILL.");
        } // end of behavior for T7__DH1__IMPACT_DRILL
        
        // T7__DH1__IMPACT_DRILL behavior
        // uml: enter [trace_guard("State T7__DH1__IMPACT_DRILL: check behavior `enter / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__IMPACT_DRILL; }`.", true)] / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__IMPACT_DRILL; }
        if (trace_guard("State T7__DH1__IMPACT_DRILL: check behavior `enter / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__IMPACT_DRILL; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__IMPACT_DRILL;`
            this.vars.T7__DH1__BUILD_history = Spec2Sm.T7__DH1__BUILD_HistoryId.T7__DH1__IMPACT_DRILL;
        } // end of behavior for T7__DH1__IMPACT_DRILL
    }
    
    _T7__DH1__IMPACT_DRILL_exit()
    {
        // T7__DH1__IMPACT_DRILL behavior
        // uml: exit / { trace("Exit T7__DH1__IMPACT_DRILL."); }
        {
            // Step 1: execute action `trace("Exit T7__DH1__IMPACT_DRILL.");`
            console.log("Exit T7__DH1__IMPACT_DRILL.");
        } // end of behavior for T7__DH1__IMPACT_DRILL
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH1__TOOL_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _T7__DH1__IMPACT_DRILL_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // T7__DH1__IMPACT_DRILL behavior
        // uml: EV1 [trace_guard("State T7__DH1__IMPACT_DRILL: check behavior `EV1 TransitionTo(T7__DH1__CIRCULAR_SAW)`.", true)] / { trace("Transition action `` for T7__DH1__IMPACT_DRILL to T7__DH1__CIRCULAR_SAW."); } TransitionTo(T7__DH1__CIRCULAR_SAW)
        if (trace_guard("State T7__DH1__IMPACT_DRILL: check behavior `EV1 TransitionTo(T7__DH1__CIRCULAR_SAW)`.", true))
        {
            // Step 1: Exit states until we reach `T7__DH1__TOOL` state (Least Common Ancestor for transition).
            this._T7__DH1__IMPACT_DRILL_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH1__IMPACT_DRILL to T7__DH1__CIRCULAR_SAW.");`.
            console.log("Transition action `` for T7__DH1__IMPACT_DRILL to T7__DH1__CIRCULAR_SAW.");
            
            // Step 3: Enter/move towards transition target `T7__DH1__CIRCULAR_SAW`.
            this._T7__DH1__CIRCULAR_SAW_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__DH1__CIRCULAR_SAW;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for T7__DH1__IMPACT_DRILL
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH1__TOY
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH1__TOY_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH1__TOY_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._T7__DH1__TOY_ev1;
        
        // T7__DH1__TOY behavior
        // uml: enter / { trace("Enter T7__DH1__TOY."); }
        {
            // Step 1: execute action `trace("Enter T7__DH1__TOY.");`
            console.log("Enter T7__DH1__TOY.");
        } // end of behavior for T7__DH1__TOY
        
        // T7__DH1__TOY behavior
        // uml: enter [trace_guard("State T7__DH1__TOY: check behavior `enter / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__TOY; }`.", true)] / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__TOY; }
        if (trace_guard("State T7__DH1__TOY: check behavior `enter / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__TOY; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__TOY;`
            this.vars.T7__DH1__BUILD_history = Spec2Sm.T7__DH1__BUILD_HistoryId.T7__DH1__TOY;
        } // end of behavior for T7__DH1__TOY
    }
    
    _T7__DH1__TOY_exit()
    {
        // T7__DH1__TOY behavior
        // uml: exit / { trace("Exit T7__DH1__TOY."); }
        {
            // Step 1: execute action `trace("Exit T7__DH1__TOY.");`
            console.log("Exit T7__DH1__TOY.");
        } // end of behavior for T7__DH1__TOY
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH1__BUILD_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _T7__DH1__TOY_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // T7__DH1__TOY behavior
        // uml: EV1 [trace_guard("State T7__DH1__TOY: check behavior `EV1 TransitionTo(T7__DH1__TOOL)`.", true)] / { trace("Transition action `` for T7__DH1__TOY to T7__DH1__TOOL."); } TransitionTo(T7__DH1__TOOL)
        if (trace_guard("State T7__DH1__TOY: check behavior `EV1 TransitionTo(T7__DH1__TOOL)`.", true))
        {
            // Step 1: Exit states until we reach `T7__DH1__BUILD` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._T7__DH1__BUILD_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH1__TOY to T7__DH1__TOOL.");`.
            console.log("Transition action `` for T7__DH1__TOY to T7__DH1__TOOL.");
            
            // Step 3: Enter/move towards transition target `T7__DH1__TOOL`.
            this._T7__DH1__TOOL_enter();
            
            // Finish transition by calling pseudo state transition function.
            this._T7__DH1__TOOL_InitialState_transition();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for T7__DH1__TOY
    }
    
    _T7__DH1__TOY_InitialState_transition()
    {
        // T7__DH1__TOY.InitialState behavior
        // uml: / { trace("Transition action `` for T7__DH1__TOY.InitialState to T7__DH1__RACE_CAR."); } TransitionTo(T7__DH1__RACE_CAR)
        {
            // Step 1: Exit states until we reach `T7__DH1__TOY` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH1__TOY.InitialState to T7__DH1__RACE_CAR.");`.
            console.log("Transition action `` for T7__DH1__TOY.InitialState to T7__DH1__RACE_CAR.");
            
            // Step 3: Enter/move towards transition target `T7__DH1__RACE_CAR`.
            this._T7__DH1__RACE_CAR_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__DH1__RACE_CAR;
            this._ancestorEventHandler = null;
            return;
        } // end of behavior for T7__DH1__TOY.InitialState
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH1__GLOW_WORM
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH1__GLOW_WORM_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH1__GLOW_WORM_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._T7__DH1__GLOW_WORM_ev1;
        
        // T7__DH1__GLOW_WORM behavior
        // uml: enter / { trace("Enter T7__DH1__GLOW_WORM."); }
        {
            // Step 1: execute action `trace("Enter T7__DH1__GLOW_WORM.");`
            console.log("Enter T7__DH1__GLOW_WORM.");
        } // end of behavior for T7__DH1__GLOW_WORM
        
        // T7__DH1__GLOW_WORM behavior
        // uml: enter [trace_guard("State T7__DH1__GLOW_WORM: check behavior `enter / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__GLOW_WORM; }`.", true)] / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__GLOW_WORM; }
        if (trace_guard("State T7__DH1__GLOW_WORM: check behavior `enter / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__GLOW_WORM; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__GLOW_WORM;`
            this.vars.T7__DH1__BUILD_history = Spec2Sm.T7__DH1__BUILD_HistoryId.T7__DH1__GLOW_WORM;
        } // end of behavior for T7__DH1__GLOW_WORM
    }
    
    _T7__DH1__GLOW_WORM_exit()
    {
        // T7__DH1__GLOW_WORM behavior
        // uml: exit / { trace("Exit T7__DH1__GLOW_WORM."); }
        {
            // Step 1: execute action `trace("Exit T7__DH1__GLOW_WORM.");`
            console.log("Exit T7__DH1__GLOW_WORM.");
        } // end of behavior for T7__DH1__GLOW_WORM
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH1__TOY_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._T7__DH1__TOY_ev1;  // the next ancestor that handles this event is T7__DH1__TOY
    }
    
    _T7__DH1__GLOW_WORM_ev1()
    {
        // Setup handler for next ancestor that listens to `ev1` event.
        this._ancestorEventHandler = this._T7__DH1__TOY_ev1;
        
        // T7__DH1__GLOW_WORM behavior
        // uml: EV1 [trace_guard("State T7__DH1__GLOW_WORM: check behavior `EV1 TransitionTo(T7__DH1__ROBOT)`.", true)] / { trace("Transition action `` for T7__DH1__GLOW_WORM to T7__DH1__ROBOT."); } TransitionTo(T7__DH1__ROBOT)
        if (trace_guard("State T7__DH1__GLOW_WORM: check behavior `EV1 TransitionTo(T7__DH1__ROBOT)`.", true))
        {
            // Step 1: Exit states until we reach `T7__DH1__TOY` state (Least Common Ancestor for transition).
            this._T7__DH1__GLOW_WORM_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH1__GLOW_WORM to T7__DH1__ROBOT.");`.
            console.log("Transition action `` for T7__DH1__GLOW_WORM to T7__DH1__ROBOT.");
            
            // Step 3: Enter/move towards transition target `T7__DH1__ROBOT`.
            this._T7__DH1__ROBOT_enter();
            
            // Finish transition by calling pseudo state transition function.
            this._T7__DH1__ROBOT_InitialState_transition();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for T7__DH1__GLOW_WORM
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH1__RACE_CAR
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH1__RACE_CAR_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH1__RACE_CAR_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._T7__DH1__RACE_CAR_ev1;
        
        // T7__DH1__RACE_CAR behavior
        // uml: enter / { trace("Enter T7__DH1__RACE_CAR."); }
        {
            // Step 1: execute action `trace("Enter T7__DH1__RACE_CAR.");`
            console.log("Enter T7__DH1__RACE_CAR.");
        } // end of behavior for T7__DH1__RACE_CAR
        
        // T7__DH1__RACE_CAR behavior
        // uml: enter [trace_guard("State T7__DH1__RACE_CAR: check behavior `enter / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__RACE_CAR; }`.", true)] / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__RACE_CAR; }
        if (trace_guard("State T7__DH1__RACE_CAR: check behavior `enter / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__RACE_CAR; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__RACE_CAR;`
            this.vars.T7__DH1__BUILD_history = Spec2Sm.T7__DH1__BUILD_HistoryId.T7__DH1__RACE_CAR;
        } // end of behavior for T7__DH1__RACE_CAR
    }
    
    _T7__DH1__RACE_CAR_exit()
    {
        // T7__DH1__RACE_CAR behavior
        // uml: exit / { trace("Exit T7__DH1__RACE_CAR."); }
        {
            // Step 1: execute action `trace("Exit T7__DH1__RACE_CAR.");`
            console.log("Exit T7__DH1__RACE_CAR.");
        } // end of behavior for T7__DH1__RACE_CAR
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH1__TOY_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._T7__DH1__TOY_ev1;  // the next ancestor that handles this event is T7__DH1__TOY
    }
    
    _T7__DH1__RACE_CAR_ev1()
    {
        // Setup handler for next ancestor that listens to `ev1` event.
        this._ancestorEventHandler = this._T7__DH1__TOY_ev1;
        
        // T7__DH1__RACE_CAR behavior
        // uml: EV1 [trace_guard("State T7__DH1__RACE_CAR: check behavior `EV1 TransitionTo(T7__DH1__TEDDY_BEAR)`.", true)] / { trace("Transition action `` for T7__DH1__RACE_CAR to T7__DH1__TEDDY_BEAR."); } TransitionTo(T7__DH1__TEDDY_BEAR)
        if (trace_guard("State T7__DH1__RACE_CAR: check behavior `EV1 TransitionTo(T7__DH1__TEDDY_BEAR)`.", true))
        {
            // Step 1: Exit states until we reach `T7__DH1__TOY` state (Least Common Ancestor for transition).
            this._T7__DH1__RACE_CAR_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH1__RACE_CAR to T7__DH1__TEDDY_BEAR.");`.
            console.log("Transition action `` for T7__DH1__RACE_CAR to T7__DH1__TEDDY_BEAR.");
            
            // Step 3: Enter/move towards transition target `T7__DH1__TEDDY_BEAR`.
            this._T7__DH1__TEDDY_BEAR_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__DH1__TEDDY_BEAR;
            this._ancestorEventHandler = null;
            return;
        } // end of behavior for T7__DH1__RACE_CAR
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH1__ROBOT
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH1__ROBOT_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH1__ROBOT_exit;
        
        // T7__DH1__ROBOT behavior
        // uml: enter / { trace("Enter T7__DH1__ROBOT."); }
        {
            // Step 1: execute action `trace("Enter T7__DH1__ROBOT.");`
            console.log("Enter T7__DH1__ROBOT.");
        } // end of behavior for T7__DH1__ROBOT
        
        // T7__DH1__ROBOT behavior
        // uml: enter [trace_guard("State T7__DH1__ROBOT: check behavior `enter / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__ROBOT; }`.", true)] / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__ROBOT; }
        if (trace_guard("State T7__DH1__ROBOT: check behavior `enter / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__ROBOT; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__ROBOT;`
            this.vars.T7__DH1__BUILD_history = Spec2Sm.T7__DH1__BUILD_HistoryId.T7__DH1__ROBOT;
        } // end of behavior for T7__DH1__ROBOT
    }
    
    _T7__DH1__ROBOT_exit()
    {
        // T7__DH1__ROBOT behavior
        // uml: exit / { trace("Exit T7__DH1__ROBOT."); }
        {
            // Step 1: execute action `trace("Exit T7__DH1__ROBOT.");`
            console.log("Exit T7__DH1__ROBOT.");
        } // end of behavior for T7__DH1__ROBOT
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH1__TOY_exit;
    }
    
    _T7__DH1__ROBOT_InitialState_transition()
    {
        // T7__DH1__ROBOT.InitialState behavior
        // uml: / { trace("Transition action `` for T7__DH1__ROBOT.InitialState to T7__DH1__BATTLEBOT."); } TransitionTo(T7__DH1__BATTLEBOT)
        {
            // Step 1: Exit states until we reach `T7__DH1__ROBOT` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH1__ROBOT.InitialState to T7__DH1__BATTLEBOT.");`.
            console.log("Transition action `` for T7__DH1__ROBOT.InitialState to T7__DH1__BATTLEBOT.");
            
            // Step 3: Enter/move towards transition target `T7__DH1__BATTLEBOT`.
            this._T7__DH1__BATTLEBOT_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__DH1__BATTLEBOT;
            this._ancestorEventHandler = null;
            return;
        } // end of behavior for T7__DH1__ROBOT.InitialState
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH1__BATTLEBOT
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH1__BATTLEBOT_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH1__BATTLEBOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._T7__DH1__BATTLEBOT_ev1;
        
        // T7__DH1__BATTLEBOT behavior
        // uml: enter / { trace("Enter T7__DH1__BATTLEBOT."); }
        {
            // Step 1: execute action `trace("Enter T7__DH1__BATTLEBOT.");`
            console.log("Enter T7__DH1__BATTLEBOT.");
        } // end of behavior for T7__DH1__BATTLEBOT
        
        // T7__DH1__BATTLEBOT behavior
        // uml: enter [trace_guard("State T7__DH1__BATTLEBOT: check behavior `enter / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__BATTLEBOT; }`.", true)] / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__BATTLEBOT; }
        if (trace_guard("State T7__DH1__BATTLEBOT: check behavior `enter / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__BATTLEBOT; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__BATTLEBOT;`
            this.vars.T7__DH1__BUILD_history = Spec2Sm.T7__DH1__BUILD_HistoryId.T7__DH1__BATTLEBOT;
        } // end of behavior for T7__DH1__BATTLEBOT
    }
    
    _T7__DH1__BATTLEBOT_exit()
    {
        // T7__DH1__BATTLEBOT behavior
        // uml: exit / { trace("Exit T7__DH1__BATTLEBOT."); }
        {
            // Step 1: execute action `trace("Exit T7__DH1__BATTLEBOT.");`
            console.log("Exit T7__DH1__BATTLEBOT.");
        } // end of behavior for T7__DH1__BATTLEBOT
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH1__ROBOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._T7__DH1__TOY_ev1;  // the next ancestor that handles this event is T7__DH1__TOY
    }
    
    _T7__DH1__BATTLEBOT_ev1()
    {
        // Setup handler for next ancestor that listens to `ev1` event.
        this._ancestorEventHandler = this._T7__DH1__TOY_ev1;
        
        // T7__DH1__BATTLEBOT behavior
        // uml: EV1 [trace_guard("State T7__DH1__BATTLEBOT: check behavior `EV1 TransitionTo(T7__DH1__WALL_E)`.", true)] / { trace("Transition action `` for T7__DH1__BATTLEBOT to T7__DH1__WALL_E."); } TransitionTo(T7__DH1__WALL_E)
        if (trace_guard("State T7__DH1__BATTLEBOT: check behavior `EV1 TransitionTo(T7__DH1__WALL_E)`.", true))
        {
            // Step 1: Exit states until we reach `T7__DH1__ROBOT` state (Least Common Ancestor for transition).
            this._T7__DH1__BATTLEBOT_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH1__BATTLEBOT to T7__DH1__WALL_E.");`.
            console.log("Transition action `` for T7__DH1__BATTLEBOT to T7__DH1__WALL_E.");
            
            // Step 3: Enter/move towards transition target `T7__DH1__WALL_E`.
            this._T7__DH1__WALL_E_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__DH1__WALL_E;
            this._ancestorEventHandler = null;
            return;
        } // end of behavior for T7__DH1__BATTLEBOT
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH1__WALL_E
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH1__WALL_E_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH1__WALL_E_exit;
        
        // T7__DH1__WALL_E behavior
        // uml: enter / { trace("Enter T7__DH1__WALL_E."); }
        {
            // Step 1: execute action `trace("Enter T7__DH1__WALL_E.");`
            console.log("Enter T7__DH1__WALL_E.");
        } // end of behavior for T7__DH1__WALL_E
        
        // T7__DH1__WALL_E behavior
        // uml: enter [trace_guard("State T7__DH1__WALL_E: check behavior `enter / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__WALL_E; }`.", true)] / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__WALL_E; }
        if (trace_guard("State T7__DH1__WALL_E: check behavior `enter / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__WALL_E; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__WALL_E;`
            this.vars.T7__DH1__BUILD_history = Spec2Sm.T7__DH1__BUILD_HistoryId.T7__DH1__WALL_E;
        } // end of behavior for T7__DH1__WALL_E
    }
    
    _T7__DH1__WALL_E_exit()
    {
        // T7__DH1__WALL_E behavior
        // uml: exit / { trace("Exit T7__DH1__WALL_E."); }
        {
            // Step 1: execute action `trace("Exit T7__DH1__WALL_E.");`
            console.log("Exit T7__DH1__WALL_E.");
        } // end of behavior for T7__DH1__WALL_E
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH1__ROBOT_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH1__TEDDY_BEAR
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH1__TEDDY_BEAR_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH1__TEDDY_BEAR_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._T7__DH1__TEDDY_BEAR_ev1;
        
        // T7__DH1__TEDDY_BEAR behavior
        // uml: enter / { trace("Enter T7__DH1__TEDDY_BEAR."); }
        {
            // Step 1: execute action `trace("Enter T7__DH1__TEDDY_BEAR.");`
            console.log("Enter T7__DH1__TEDDY_BEAR.");
        } // end of behavior for T7__DH1__TEDDY_BEAR
        
        // T7__DH1__TEDDY_BEAR behavior
        // uml: enter [trace_guard("State T7__DH1__TEDDY_BEAR: check behavior `enter / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__TEDDY_BEAR; }`.", true)] / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__TEDDY_BEAR; }
        if (trace_guard("State T7__DH1__TEDDY_BEAR: check behavior `enter / { this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__TEDDY_BEAR; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__DH1__BUILD_history = T7__DH1__BUILD_HistoryId.T7__DH1__TEDDY_BEAR;`
            this.vars.T7__DH1__BUILD_history = Spec2Sm.T7__DH1__BUILD_HistoryId.T7__DH1__TEDDY_BEAR;
        } // end of behavior for T7__DH1__TEDDY_BEAR
    }
    
    _T7__DH1__TEDDY_BEAR_exit()
    {
        // T7__DH1__TEDDY_BEAR behavior
        // uml: exit / { trace("Exit T7__DH1__TEDDY_BEAR."); }
        {
            // Step 1: execute action `trace("Exit T7__DH1__TEDDY_BEAR.");`
            console.log("Exit T7__DH1__TEDDY_BEAR.");
        } // end of behavior for T7__DH1__TEDDY_BEAR
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH1__TOY_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._T7__DH1__TOY_ev1;  // the next ancestor that handles this event is T7__DH1__TOY
    }
    
    _T7__DH1__TEDDY_BEAR_ev1()
    {
        // Setup handler for next ancestor that listens to `ev1` event.
        this._ancestorEventHandler = this._T7__DH1__TOY_ev1;
        
        // T7__DH1__TEDDY_BEAR behavior
        // uml: EV1 [trace_guard("State T7__DH1__TEDDY_BEAR: check behavior `EV1 TransitionTo(T7__DH1__GLOW_WORM)`.", true)] / { trace("Transition action `` for T7__DH1__TEDDY_BEAR to T7__DH1__GLOW_WORM."); } TransitionTo(T7__DH1__GLOW_WORM)
        if (trace_guard("State T7__DH1__TEDDY_BEAR: check behavior `EV1 TransitionTo(T7__DH1__GLOW_WORM)`.", true))
        {
            // Step 1: Exit states until we reach `T7__DH1__TOY` state (Least Common Ancestor for transition).
            this._T7__DH1__TEDDY_BEAR_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH1__TEDDY_BEAR to T7__DH1__GLOW_WORM.");`.
            console.log("Transition action `` for T7__DH1__TEDDY_BEAR to T7__DH1__GLOW_WORM.");
            
            // Step 3: Enter/move towards transition target `T7__DH1__GLOW_WORM`.
            this._T7__DH1__GLOW_WORM_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__DH1__GLOW_WORM;
            this._ancestorEventHandler = null;
            return;
        } // end of behavior for T7__DH1__TEDDY_BEAR
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DEEP_HISTORY2
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DEEP_HISTORY2_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DEEP_HISTORY2_exit;
        
        // T7__DEEP_HISTORY2 behavior
        // uml: enter / { trace("Enter T7__DEEP_HISTORY2."); }
        {
            // Step 1: execute action `trace("Enter T7__DEEP_HISTORY2.");`
            console.log("Enter T7__DEEP_HISTORY2.");
        } // end of behavior for T7__DEEP_HISTORY2
    }
    
    _T7__DEEP_HISTORY2_exit()
    {
        // T7__DEEP_HISTORY2 behavior
        // uml: exit / { trace("Exit T7__DEEP_HISTORY2."); }
        {
            // Step 1: execute action `trace("Exit T7__DEEP_HISTORY2.");`
            console.log("Exit T7__DEEP_HISTORY2.");
        } // end of behavior for T7__DEEP_HISTORY2
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST7_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH2__STATE_0
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH2__STATE_0_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH2__STATE_0_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EVOPEN] = this._T7__DH2__STATE_0_evopen;
        
        // T7__DH2__state_0 behavior
        // uml: enter / { trace("Enter T7__DH2__state_0."); }
        {
            // Step 1: execute action `trace("Enter T7__DH2__state_0.");`
            console.log("Enter T7__DH2__state_0.");
        } // end of behavior for T7__DH2__state_0
    }
    
    _T7__DH2__STATE_0_exit()
    {
        // T7__DH2__state_0 behavior
        // uml: exit / { trace("Exit T7__DH2__state_0."); }
        {
            // Step 1: execute action `trace("Exit T7__DH2__state_0.");`
            console.log("Exit T7__DH2__state_0.");
        } // end of behavior for T7__DH2__state_0
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DEEP_HISTORY2_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EVOPEN] = null;  // no ancestor listens to this event
    }
    
    _T7__DH2__STATE_0_evopen()
    {
        // No ancestor state handles `evopen` event.
        
        // T7__DH2__state_0 behavior
        // uml: evOpen [trace_guard("State T7__DH2__state_0: check behavior `evOpen TransitionTo(T7__DH2__state_3)`.", true)] / { trace("Transition action `` for T7__DH2__state_0 to T7__DH2__state_3."); } TransitionTo(T7__DH2__state_3)
        if (trace_guard("State T7__DH2__state_0: check behavior `evOpen TransitionTo(T7__DH2__state_3)`.", true))
        {
            // Step 1: Exit states until we reach `T7__DEEP_HISTORY2` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._T7__DEEP_HISTORY2_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH2__state_0 to T7__DH2__state_3.");`.
            console.log("Transition action `` for T7__DH2__state_0 to T7__DH2__state_3.");
            
            // Step 3: Enter/move towards transition target `T7__DH2__state_3`.
            this._T7__DH2__STATE_3_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__DH2__STATE_3;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for T7__DH2__state_0
    }
    
    _T7__DH2__state_0_InitialState_transition()
    {
        // T7__DH2__state_0.InitialState behavior
        // uml: / { trace("Transition action `` for T7__DH2__state_0.InitialState to T7__DH2__state_0.History."); } TransitionTo(T7__DH2__state_0.History)
        {
            // Step 1: Exit states until we reach `T7__DH2__state_0` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH2__state_0.InitialState to T7__DH2__state_0.History.");`.
            console.log("Transition action `` for T7__DH2__state_0.InitialState to T7__DH2__state_0.History.");
            
            // Step 3: Enter/move towards transition target `T7__DH2__state_0.History`.
            // T7__DH2__state_0.History is a pseudo state and cannot have an `enter` trigger.
            
            // T7__DH2__state_0.History behavior
            // uml: [this.vars.T7__DH2__state_0_history == T7__DH2__state_0_HistoryId.T7__DH2__state_2] / { trace("Transition action `` for T7__DH2__state_0.History to T7__DH2__state_2."); } TransitionTo(T7__DH2__state_2)
            if (this.vars.T7__DH2__state_0_history == Spec2Sm.T7__DH2__state_0_HistoryId.T7__DH2__state_2)
            {
                // Step 1: Exit states until we reach `T7__DH2__state_0` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__DH2__state_0.History to T7__DH2__state_2.");`.
                trace("Transition action `` for T7__DH2__state_0.History to T7__DH2__state_2.");
                
                // Step 3: Enter/move towards transition target `T7__DH2__state_2`.
                this._T7__DH2__STATE_2_enter();
                
                // Finish transition by calling pseudo state transition function.
                this._T7__DH2__state_2_InitialState_transition();
                return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
            } // end of behavior for T7__DH2__state_0.History
            
            // T7__DH2__state_0.History behavior
            // uml: [this.vars.T7__DH2__state_0_history == T7__DH2__state_0_HistoryId.T7__DH2__state_6] / { trace("Transition action `` for T7__DH2__state_0.History to T7__DH2__state_6."); } TransitionTo(T7__DH2__state_6)
            if (this.vars.T7__DH2__state_0_history == Spec2Sm.T7__DH2__state_0_HistoryId.T7__DH2__state_6)
            {
                // Step 1: Exit states until we reach `T7__DH2__state_0` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__DH2__state_0.History to T7__DH2__state_6.");`.
                trace("Transition action `` for T7__DH2__state_0.History to T7__DH2__state_6.");
                
                // Step 3: Enter/move towards transition target `T7__DH2__state_6`.
                this._T7__DH2__STATE_2_enter();
                this._T7__DH2__STATE_6_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.T7__DH2__STATE_6;
                this._ancestorEventHandler = null;
                return;
            } // end of behavior for T7__DH2__state_0.History
            
            // T7__DH2__state_0.History behavior
            // uml: [this.vars.T7__DH2__state_0_history == T7__DH2__state_0_HistoryId.T7__DH2__state_9] / { trace("Transition action `` for T7__DH2__state_0.History to T7__DH2__state_9."); } TransitionTo(T7__DH2__state_9)
            if (this.vars.T7__DH2__state_0_history == Spec2Sm.T7__DH2__state_0_HistoryId.T7__DH2__state_9)
            {
                // Step 1: Exit states until we reach `T7__DH2__state_0` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__DH2__state_0.History to T7__DH2__state_9.");`.
                trace("Transition action `` for T7__DH2__state_0.History to T7__DH2__state_9.");
                
                // Step 3: Enter/move towards transition target `T7__DH2__state_9`.
                this._T7__DH2__STATE_2_enter();
                this._T7__DH2__STATE_9_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.T7__DH2__STATE_9;
                this._ancestorEventHandler = null;
                return;
            } // end of behavior for T7__DH2__state_0.History
            
            // T7__DH2__state_0.History behavior
            // uml: else / { trace("Transition action `` for T7__DH2__state_0.History to T7__DH2__state_1."); } TransitionTo(T7__DH2__state_1)
            {
                // Step 1: Exit states until we reach `T7__DH2__state_0` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__DH2__state_0.History to T7__DH2__state_1.");`.
                console.log("Transition action `` for T7__DH2__state_0.History to T7__DH2__state_1.");
                
                // Step 3: Enter/move towards transition target `T7__DH2__state_1`.
                this._T7__DH2__STATE_1_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.T7__DH2__STATE_1;
                this._ancestorEventHandler = null;
                return;
            } // end of behavior for T7__DH2__state_0.History
        } // end of behavior for T7__DH2__state_0.InitialState
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH2__STATE_1
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH2__STATE_1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH2__STATE_1_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EVSTEP] = this._T7__DH2__STATE_1_evstep;
        
        // T7__DH2__state_1 behavior
        // uml: enter / { trace("Enter T7__DH2__state_1."); }
        {
            // Step 1: execute action `trace("Enter T7__DH2__state_1.");`
            console.log("Enter T7__DH2__state_1.");
        } // end of behavior for T7__DH2__state_1
        
        // T7__DH2__state_1 behavior
        // uml: enter [trace_guard("State T7__DH2__state_1: check behavior `enter / { this.vars.T7__DH2__state_0_history = T7__DH2__state_0_HistoryId.T7__DH2__state_1; }`.", true)] / { this.vars.T7__DH2__state_0_history = T7__DH2__state_0_HistoryId.T7__DH2__state_1; }
        if (trace_guard("State T7__DH2__state_1: check behavior `enter / { this.vars.T7__DH2__state_0_history = T7__DH2__state_0_HistoryId.T7__DH2__state_1; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__DH2__state_0_history = T7__DH2__state_0_HistoryId.T7__DH2__state_1;`
            this.vars.T7__DH2__state_0_history = Spec2Sm.T7__DH2__state_0_HistoryId.T7__DH2__state_1;
        } // end of behavior for T7__DH2__state_1
    }
    
    _T7__DH2__STATE_1_exit()
    {
        // T7__DH2__state_1 behavior
        // uml: exit / { trace("Exit T7__DH2__state_1."); }
        {
            // Step 1: execute action `trace("Exit T7__DH2__state_1.");`
            console.log("Exit T7__DH2__state_1.");
        } // end of behavior for T7__DH2__state_1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH2__STATE_0_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EVSTEP] = null;  // no ancestor listens to this event
    }
    
    _T7__DH2__STATE_1_evstep()
    {
        // No ancestor state handles `evstep` event.
        
        // T7__DH2__state_1 behavior
        // uml: evStep [trace_guard("State T7__DH2__state_1: check behavior `evStep TransitionTo(T7__DH2__state_2)`.", true)] / { trace("Transition action `` for T7__DH2__state_1 to T7__DH2__state_2."); } TransitionTo(T7__DH2__state_2)
        if (trace_guard("State T7__DH2__state_1: check behavior `evStep TransitionTo(T7__DH2__state_2)`.", true))
        {
            // Step 1: Exit states until we reach `T7__DH2__state_0` state (Least Common Ancestor for transition).
            this._T7__DH2__STATE_1_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH2__state_1 to T7__DH2__state_2.");`.
            console.log("Transition action `` for T7__DH2__state_1 to T7__DH2__state_2.");
            
            // Step 3: Enter/move towards transition target `T7__DH2__state_2`.
            this._T7__DH2__STATE_2_enter();
            
            // Finish transition by calling pseudo state transition function.
            this._T7__DH2__state_2_InitialState_transition();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for T7__DH2__state_1
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH2__STATE_2
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH2__STATE_2_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH2__STATE_2_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EVBACK] = this._T7__DH2__STATE_2_evback;
        
        // T7__DH2__state_2 behavior
        // uml: enter / { trace("Enter T7__DH2__state_2."); }
        {
            // Step 1: execute action `trace("Enter T7__DH2__state_2.");`
            console.log("Enter T7__DH2__state_2.");
        } // end of behavior for T7__DH2__state_2
        
        // T7__DH2__state_2 behavior
        // uml: enter [trace_guard("State T7__DH2__state_2: check behavior `enter / { this.vars.T7__DH2__state_0_history = T7__DH2__state_0_HistoryId.T7__DH2__state_2; }`.", true)] / { this.vars.T7__DH2__state_0_history = T7__DH2__state_0_HistoryId.T7__DH2__state_2; }
        if (trace_guard("State T7__DH2__state_2: check behavior `enter / { this.vars.T7__DH2__state_0_history = T7__DH2__state_0_HistoryId.T7__DH2__state_2; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__DH2__state_0_history = T7__DH2__state_0_HistoryId.T7__DH2__state_2;`
            this.vars.T7__DH2__state_0_history = Spec2Sm.T7__DH2__state_0_HistoryId.T7__DH2__state_2;
        } // end of behavior for T7__DH2__state_2
    }
    
    _T7__DH2__STATE_2_exit()
    {
        // T7__DH2__state_2 behavior
        // uml: exit / { trace("Exit T7__DH2__state_2."); }
        {
            // Step 1: execute action `trace("Exit T7__DH2__state_2.");`
            console.log("Exit T7__DH2__state_2.");
        } // end of behavior for T7__DH2__state_2
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH2__STATE_0_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EVBACK] = null;  // no ancestor listens to this event
    }
    
    _T7__DH2__STATE_2_evback()
    {
        // No ancestor state handles `evback` event.
        
        // T7__DH2__state_2 behavior
        // uml: evBack [trace_guard("State T7__DH2__state_2: check behavior `evBack TransitionTo(T7__DH2__state_1)`.", true)] / { trace("Transition action `` for T7__DH2__state_2 to T7__DH2__state_1."); } TransitionTo(T7__DH2__state_1)
        if (trace_guard("State T7__DH2__state_2: check behavior `evBack TransitionTo(T7__DH2__state_1)`.", true))
        {
            // Step 1: Exit states until we reach `T7__DH2__state_0` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._T7__DH2__STATE_0_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH2__state_2 to T7__DH2__state_1.");`.
            console.log("Transition action `` for T7__DH2__state_2 to T7__DH2__state_1.");
            
            // Step 3: Enter/move towards transition target `T7__DH2__state_1`.
            this._T7__DH2__STATE_1_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__DH2__STATE_1;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for T7__DH2__state_2
    }
    
    _T7__DH2__state_2_InitialState_transition()
    {
        // T7__DH2__state_2.InitialState behavior
        // uml: / { trace("Transition action `` for T7__DH2__state_2.InitialState to T7__DH2__state_6."); } TransitionTo(T7__DH2__state_6)
        {
            // Step 1: Exit states until we reach `T7__DH2__state_2` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH2__state_2.InitialState to T7__DH2__state_6.");`.
            console.log("Transition action `` for T7__DH2__state_2.InitialState to T7__DH2__state_6.");
            
            // Step 3: Enter/move towards transition target `T7__DH2__state_6`.
            this._T7__DH2__STATE_6_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__DH2__STATE_6;
            this._ancestorEventHandler = null;
            return;
        } // end of behavior for T7__DH2__state_2.InitialState
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH2__STATE_6
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH2__STATE_6_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH2__STATE_6_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EVSTEP] = this._T7__DH2__STATE_6_evstep;
        
        // T7__DH2__state_6 behavior
        // uml: enter / { trace("Enter T7__DH2__state_6."); }
        {
            // Step 1: execute action `trace("Enter T7__DH2__state_6.");`
            console.log("Enter T7__DH2__state_6.");
        } // end of behavior for T7__DH2__state_6
        
        // T7__DH2__state_6 behavior
        // uml: enter [trace_guard("State T7__DH2__state_6: check behavior `enter / { this.vars.T7__DH2__state_0_history = T7__DH2__state_0_HistoryId.T7__DH2__state_6; }`.", true)] / { this.vars.T7__DH2__state_0_history = T7__DH2__state_0_HistoryId.T7__DH2__state_6; }
        if (trace_guard("State T7__DH2__state_6: check behavior `enter / { this.vars.T7__DH2__state_0_history = T7__DH2__state_0_HistoryId.T7__DH2__state_6; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__DH2__state_0_history = T7__DH2__state_0_HistoryId.T7__DH2__state_6;`
            this.vars.T7__DH2__state_0_history = Spec2Sm.T7__DH2__state_0_HistoryId.T7__DH2__state_6;
        } // end of behavior for T7__DH2__state_6
    }
    
    _T7__DH2__STATE_6_exit()
    {
        // T7__DH2__state_6 behavior
        // uml: exit / { trace("Exit T7__DH2__state_6."); }
        {
            // Step 1: execute action `trace("Exit T7__DH2__state_6.");`
            console.log("Exit T7__DH2__state_6.");
        } // end of behavior for T7__DH2__state_6
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH2__STATE_2_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EVSTEP] = null;  // no ancestor listens to this event
    }
    
    _T7__DH2__STATE_6_evstep()
    {
        // No ancestor state handles `evstep` event.
        
        // T7__DH2__state_6 behavior
        // uml: evStep [trace_guard("State T7__DH2__state_6: check behavior `evStep TransitionTo(T7__DH2__state_9)`.", true)] / { trace("Transition action `` for T7__DH2__state_6 to T7__DH2__state_9."); } TransitionTo(T7__DH2__state_9)
        if (trace_guard("State T7__DH2__state_6: check behavior `evStep TransitionTo(T7__DH2__state_9)`.", true))
        {
            // Step 1: Exit states until we reach `T7__DH2__state_2` state (Least Common Ancestor for transition).
            this._T7__DH2__STATE_6_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH2__state_6 to T7__DH2__state_9.");`.
            console.log("Transition action `` for T7__DH2__state_6 to T7__DH2__state_9.");
            
            // Step 3: Enter/move towards transition target `T7__DH2__state_9`.
            this._T7__DH2__STATE_9_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__DH2__STATE_9;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for T7__DH2__state_6
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH2__STATE_9
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH2__STATE_9_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH2__STATE_9_exit;
        
        // T7__DH2__state_9 behavior
        // uml: enter / { trace("Enter T7__DH2__state_9."); }
        {
            // Step 1: execute action `trace("Enter T7__DH2__state_9.");`
            console.log("Enter T7__DH2__state_9.");
        } // end of behavior for T7__DH2__state_9
        
        // T7__DH2__state_9 behavior
        // uml: enter [trace_guard("State T7__DH2__state_9: check behavior `enter / { this.vars.T7__DH2__state_0_history = T7__DH2__state_0_HistoryId.T7__DH2__state_9; }`.", true)] / { this.vars.T7__DH2__state_0_history = T7__DH2__state_0_HistoryId.T7__DH2__state_9; }
        if (trace_guard("State T7__DH2__state_9: check behavior `enter / { this.vars.T7__DH2__state_0_history = T7__DH2__state_0_HistoryId.T7__DH2__state_9; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__DH2__state_0_history = T7__DH2__state_0_HistoryId.T7__DH2__state_9;`
            this.vars.T7__DH2__state_0_history = Spec2Sm.T7__DH2__state_0_HistoryId.T7__DH2__state_9;
        } // end of behavior for T7__DH2__state_9
    }
    
    _T7__DH2__STATE_9_exit()
    {
        // T7__DH2__state_9 behavior
        // uml: exit / { trace("Exit T7__DH2__state_9."); }
        {
            // Step 1: execute action `trace("Exit T7__DH2__state_9.");`
            console.log("Exit T7__DH2__state_9.");
        } // end of behavior for T7__DH2__state_9
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH2__STATE_2_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH2__STATE_3
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH2__STATE_3_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH2__STATE_3_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EVCLOSE] = this._T7__DH2__STATE_3_evclose;
        
        // T7__DH2__state_3 behavior
        // uml: enter / { trace("Enter T7__DH2__state_3."); }
        {
            // Step 1: execute action `trace("Enter T7__DH2__state_3.");`
            console.log("Enter T7__DH2__state_3.");
        } // end of behavior for T7__DH2__state_3
    }
    
    _T7__DH2__STATE_3_exit()
    {
        // T7__DH2__state_3 behavior
        // uml: exit / { trace("Exit T7__DH2__state_3."); }
        {
            // Step 1: execute action `trace("Exit T7__DH2__state_3.");`
            console.log("Exit T7__DH2__state_3.");
        } // end of behavior for T7__DH2__state_3
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DEEP_HISTORY2_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EVCLOSE] = null;  // no ancestor listens to this event
    }
    
    _T7__DH2__STATE_3_evclose()
    {
        // No ancestor state handles `evclose` event.
        
        // T7__DH2__state_3 behavior
        // uml: evClose [trace_guard("State T7__DH2__state_3: check behavior `evClose TransitionTo(T7__DH2__state_0)`.", true)] / { trace("Transition action `` for T7__DH2__state_3 to T7__DH2__state_0."); } TransitionTo(T7__DH2__state_0)
        if (trace_guard("State T7__DH2__state_3: check behavior `evClose TransitionTo(T7__DH2__state_0)`.", true))
        {
            // Step 1: Exit states until we reach `T7__DEEP_HISTORY2` state (Least Common Ancestor for transition).
            this._T7__DH2__STATE_3_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH2__state_3 to T7__DH2__state_0.");`.
            console.log("Transition action `` for T7__DH2__state_3 to T7__DH2__state_0.");
            
            // Step 3: Enter/move towards transition target `T7__DH2__state_0`.
            this._T7__DH2__STATE_0_enter();
            
            // Finish transition by calling pseudo state transition function.
            this._T7__DH2__state_0_InitialState_transition();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for T7__DH2__state_3
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DEEP_HISTORY3
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DEEP_HISTORY3_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DEEP_HISTORY3_exit;
        
        // T7__DEEP_HISTORY3 behavior
        // uml: enter / { trace("Enter T7__DEEP_HISTORY3."); }
        {
            // Step 1: execute action `trace("Enter T7__DEEP_HISTORY3.");`
            console.log("Enter T7__DEEP_HISTORY3.");
        } // end of behavior for T7__DEEP_HISTORY3
    }
    
    _T7__DEEP_HISTORY3_exit()
    {
        // T7__DEEP_HISTORY3 behavior
        // uml: exit / { trace("Exit T7__DEEP_HISTORY3."); }
        {
            // Step 1: execute action `trace("Exit T7__DEEP_HISTORY3.");`
            console.log("Exit T7__DEEP_HISTORY3.");
        } // end of behavior for T7__DEEP_HISTORY3
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST7_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH3__STATE_0
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH3__STATE_0_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH3__STATE_0_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EVOPEN] = this._T7__DH3__STATE_0_evopen;
        
        // T7__DH3__state_0 behavior
        // uml: enter / { trace("Enter T7__DH3__state_0."); }
        {
            // Step 1: execute action `trace("Enter T7__DH3__state_0.");`
            console.log("Enter T7__DH3__state_0.");
        } // end of behavior for T7__DH3__state_0
    }
    
    _T7__DH3__STATE_0_exit()
    {
        // T7__DH3__state_0 behavior
        // uml: exit / { trace("Exit T7__DH3__state_0."); }
        {
            // Step 1: execute action `trace("Exit T7__DH3__state_0.");`
            console.log("Exit T7__DH3__state_0.");
        } // end of behavior for T7__DH3__state_0
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DEEP_HISTORY3_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EVOPEN] = null;  // no ancestor listens to this event
    }
    
    _T7__DH3__STATE_0_evopen()
    {
        // No ancestor state handles `evopen` event.
        
        // T7__DH3__state_0 behavior
        // uml: evOpen [trace_guard("State T7__DH3__state_0: check behavior `evOpen TransitionTo(T7__DH3__state_3)`.", true)] / { trace("Transition action `` for T7__DH3__state_0 to T7__DH3__state_3."); } TransitionTo(T7__DH3__state_3)
        if (trace_guard("State T7__DH3__state_0: check behavior `evOpen TransitionTo(T7__DH3__state_3)`.", true))
        {
            // Step 1: Exit states until we reach `T7__DEEP_HISTORY3` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._T7__DEEP_HISTORY3_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH3__state_0 to T7__DH3__state_3.");`.
            console.log("Transition action `` for T7__DH3__state_0 to T7__DH3__state_3.");
            
            // Step 3: Enter/move towards transition target `T7__DH3__state_3`.
            this._T7__DH3__STATE_3_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__DH3__STATE_3;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for T7__DH3__state_0
    }
    
    _T7__DH3__state_0_InitialState_transition()
    {
        // T7__DH3__state_0.InitialState behavior
        // uml: / { trace("Transition action `` for T7__DH3__state_0.InitialState to T7__DH3__state_0.History."); } TransitionTo(T7__DH3__state_0.History)
        {
            // Step 1: Exit states until we reach `T7__DH3__state_0` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH3__state_0.InitialState to T7__DH3__state_0.History.");`.
            console.log("Transition action `` for T7__DH3__state_0.InitialState to T7__DH3__state_0.History.");
            
            // Step 3: Enter/move towards transition target `T7__DH3__state_0.History`.
            // T7__DH3__state_0.History is a pseudo state and cannot have an `enter` trigger.
            
            // T7__DH3__state_0.History behavior
            // uml: [this.vars.T7__DH3__state_0_history == T7__DH3__state_0_HistoryId.T7__DH3__state_2] / { trace("Transition action `` for T7__DH3__state_0.History to T7__DH3__state_2."); } TransitionTo(T7__DH3__state_2)
            if (this.vars.T7__DH3__state_0_history == Spec2Sm.T7__DH3__state_0_HistoryId.T7__DH3__state_2)
            {
                // Step 1: Exit states until we reach `T7__DH3__state_0` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__DH3__state_0.History to T7__DH3__state_2.");`.
                trace("Transition action `` for T7__DH3__state_0.History to T7__DH3__state_2.");
                
                // Step 3: Enter/move towards transition target `T7__DH3__state_2`.
                this._T7__DH3__STATE_2_enter();
                
                // Finish transition by calling pseudo state transition function.
                this._T7__DH3__state_2_InitialState_transition();
                return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
            } // end of behavior for T7__DH3__state_0.History
            
            // T7__DH3__state_0.History behavior
            // uml: else / { trace("Transition action `` for T7__DH3__state_0.History to T7__DH3__state_1."); } TransitionTo(T7__DH3__state_1)
            {
                // Step 1: Exit states until we reach `T7__DH3__state_0` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__DH3__state_0.History to T7__DH3__state_1.");`.
                console.log("Transition action `` for T7__DH3__state_0.History to T7__DH3__state_1.");
                
                // Step 3: Enter/move towards transition target `T7__DH3__state_1`.
                this._T7__DH3__STATE_1_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.T7__DH3__STATE_1;
                this._ancestorEventHandler = null;
                return;
            } // end of behavior for T7__DH3__state_0.History
        } // end of behavior for T7__DH3__state_0.InitialState
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH3__STATE_1
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH3__STATE_1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH3__STATE_1_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EVSTEP] = this._T7__DH3__STATE_1_evstep;
        
        // T7__DH3__state_1 behavior
        // uml: enter / { trace("Enter T7__DH3__state_1."); }
        {
            // Step 1: execute action `trace("Enter T7__DH3__state_1.");`
            console.log("Enter T7__DH3__state_1.");
        } // end of behavior for T7__DH3__state_1
        
        // T7__DH3__state_1 behavior
        // uml: enter [trace_guard("State T7__DH3__state_1: check behavior `enter / { this.vars.T7__DH3__state_0_history = T7__DH3__state_0_HistoryId.T7__DH3__state_1; }`.", true)] / { this.vars.T7__DH3__state_0_history = T7__DH3__state_0_HistoryId.T7__DH3__state_1; }
        if (trace_guard("State T7__DH3__state_1: check behavior `enter / { this.vars.T7__DH3__state_0_history = T7__DH3__state_0_HistoryId.T7__DH3__state_1; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__DH3__state_0_history = T7__DH3__state_0_HistoryId.T7__DH3__state_1;`
            this.vars.T7__DH3__state_0_history = Spec2Sm.T7__DH3__state_0_HistoryId.T7__DH3__state_1;
        } // end of behavior for T7__DH3__state_1
    }
    
    _T7__DH3__STATE_1_exit()
    {
        // T7__DH3__state_1 behavior
        // uml: exit / { trace("Exit T7__DH3__state_1."); }
        {
            // Step 1: execute action `trace("Exit T7__DH3__state_1.");`
            console.log("Exit T7__DH3__state_1.");
        } // end of behavior for T7__DH3__state_1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH3__STATE_0_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EVSTEP] = null;  // no ancestor listens to this event
    }
    
    _T7__DH3__STATE_1_evstep()
    {
        // No ancestor state handles `evstep` event.
        
        // T7__DH3__state_1 behavior
        // uml: evStep [trace_guard("State T7__DH3__state_1: check behavior `evStep TransitionTo(T7__DH3__state_2)`.", true)] / { trace("Transition action `` for T7__DH3__state_1 to T7__DH3__state_2."); } TransitionTo(T7__DH3__state_2)
        if (trace_guard("State T7__DH3__state_1: check behavior `evStep TransitionTo(T7__DH3__state_2)`.", true))
        {
            // Step 1: Exit states until we reach `T7__DH3__state_0` state (Least Common Ancestor for transition).
            this._T7__DH3__STATE_1_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH3__state_1 to T7__DH3__state_2.");`.
            console.log("Transition action `` for T7__DH3__state_1 to T7__DH3__state_2.");
            
            // Step 3: Enter/move towards transition target `T7__DH3__state_2`.
            this._T7__DH3__STATE_2_enter();
            
            // Finish transition by calling pseudo state transition function.
            this._T7__DH3__state_2_InitialState_transition();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for T7__DH3__state_1
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH3__STATE_2
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH3__STATE_2_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH3__STATE_2_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EVBACK] = this._T7__DH3__STATE_2_evback;
        
        // T7__DH3__state_2 behavior
        // uml: enter / { trace("Enter T7__DH3__state_2."); }
        {
            // Step 1: execute action `trace("Enter T7__DH3__state_2.");`
            console.log("Enter T7__DH3__state_2.");
        } // end of behavior for T7__DH3__state_2
        
        // T7__DH3__state_2 behavior
        // uml: enter [trace_guard("State T7__DH3__state_2: check behavior `enter / { this.vars.T7__DH3__state_0_history = T7__DH3__state_0_HistoryId.T7__DH3__state_2; }`.", true)] / { this.vars.T7__DH3__state_0_history = T7__DH3__state_0_HistoryId.T7__DH3__state_2; }
        if (trace_guard("State T7__DH3__state_2: check behavior `enter / { this.vars.T7__DH3__state_0_history = T7__DH3__state_0_HistoryId.T7__DH3__state_2; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__DH3__state_0_history = T7__DH3__state_0_HistoryId.T7__DH3__state_2;`
            this.vars.T7__DH3__state_0_history = Spec2Sm.T7__DH3__state_0_HistoryId.T7__DH3__state_2;
        } // end of behavior for T7__DH3__state_2
    }
    
    _T7__DH3__STATE_2_exit()
    {
        // T7__DH3__state_2 behavior
        // uml: exit / { trace("Exit T7__DH3__state_2."); }
        {
            // Step 1: execute action `trace("Exit T7__DH3__state_2.");`
            console.log("Exit T7__DH3__state_2.");
        } // end of behavior for T7__DH3__state_2
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH3__STATE_0_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EVBACK] = null;  // no ancestor listens to this event
    }
    
    _T7__DH3__STATE_2_evback()
    {
        // No ancestor state handles `evback` event.
        
        // T7__DH3__state_2 behavior
        // uml: evBack [trace_guard("State T7__DH3__state_2: check behavior `evBack TransitionTo(T7__DH3__state_1)`.", true)] / { trace("Transition action `` for T7__DH3__state_2 to T7__DH3__state_1."); } TransitionTo(T7__DH3__state_1)
        if (trace_guard("State T7__DH3__state_2: check behavior `evBack TransitionTo(T7__DH3__state_1)`.", true))
        {
            // Step 1: Exit states until we reach `T7__DH3__state_0` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._T7__DH3__STATE_0_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH3__state_2 to T7__DH3__state_1.");`.
            console.log("Transition action `` for T7__DH3__state_2 to T7__DH3__state_1.");
            
            // Step 3: Enter/move towards transition target `T7__DH3__state_1`.
            this._T7__DH3__STATE_1_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__DH3__STATE_1;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for T7__DH3__state_2
    }
    
    _T7__DH3__state_2_InitialState_transition()
    {
        // T7__DH3__state_2.InitialState behavior
        // uml: / { trace("Transition action `` for T7__DH3__state_2.InitialState to T7__DH3__state_6."); } TransitionTo(T7__DH3__state_6)
        {
            // Step 1: Exit states until we reach `T7__DH3__state_2` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH3__state_2.InitialState to T7__DH3__state_6.");`.
            console.log("Transition action `` for T7__DH3__state_2.InitialState to T7__DH3__state_6.");
            
            // Step 3: Enter/move towards transition target `T7__DH3__state_6`.
            this._T7__DH3__STATE_6_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__DH3__STATE_6;
            this._ancestorEventHandler = null;
            return;
        } // end of behavior for T7__DH3__state_2.InitialState
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH3__STATE_6
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH3__STATE_6_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH3__STATE_6_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EVSTEP] = this._T7__DH3__STATE_6_evstep;
        
        // T7__DH3__state_6 behavior
        // uml: enter / { trace("Enter T7__DH3__state_6."); }
        {
            // Step 1: execute action `trace("Enter T7__DH3__state_6.");`
            console.log("Enter T7__DH3__state_6.");
        } // end of behavior for T7__DH3__state_6
    }
    
    _T7__DH3__STATE_6_exit()
    {
        // T7__DH3__state_6 behavior
        // uml: exit / { trace("Exit T7__DH3__state_6."); }
        {
            // Step 1: execute action `trace("Exit T7__DH3__state_6.");`
            console.log("Exit T7__DH3__state_6.");
        } // end of behavior for T7__DH3__state_6
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH3__STATE_2_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EVSTEP] = null;  // no ancestor listens to this event
    }
    
    _T7__DH3__STATE_6_evstep()
    {
        // No ancestor state handles `evstep` event.
        
        // T7__DH3__state_6 behavior
        // uml: evStep [trace_guard("State T7__DH3__state_6: check behavior `evStep TransitionTo(T7__DH3__state_9)`.", true)] / { trace("Transition action `` for T7__DH3__state_6 to T7__DH3__state_9."); } TransitionTo(T7__DH3__state_9)
        if (trace_guard("State T7__DH3__state_6: check behavior `evStep TransitionTo(T7__DH3__state_9)`.", true))
        {
            // Step 1: Exit states until we reach `T7__DH3__state_2` state (Least Common Ancestor for transition).
            this._T7__DH3__STATE_6_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH3__state_6 to T7__DH3__state_9.");`.
            console.log("Transition action `` for T7__DH3__state_6 to T7__DH3__state_9.");
            
            // Step 3: Enter/move towards transition target `T7__DH3__state_9`.
            this._T7__DH3__STATE_9_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__DH3__STATE_9;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for T7__DH3__state_6
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH3__STATE_9
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH3__STATE_9_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH3__STATE_9_exit;
        
        // T7__DH3__state_9 behavior
        // uml: enter / { trace("Enter T7__DH3__state_9."); }
        {
            // Step 1: execute action `trace("Enter T7__DH3__state_9.");`
            console.log("Enter T7__DH3__state_9.");
        } // end of behavior for T7__DH3__state_9
    }
    
    _T7__DH3__STATE_9_exit()
    {
        // T7__DH3__state_9 behavior
        // uml: exit / { trace("Exit T7__DH3__state_9."); }
        {
            // Step 1: execute action `trace("Exit T7__DH3__state_9.");`
            console.log("Exit T7__DH3__state_9.");
        } // end of behavior for T7__DH3__state_9
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DH3__STATE_2_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__DH3__STATE_3
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__DH3__STATE_3_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__DH3__STATE_3_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EVCLOSE] = this._T7__DH3__STATE_3_evclose;
        
        // T7__DH3__state_3 behavior
        // uml: enter / { trace("Enter T7__DH3__state_3."); }
        {
            // Step 1: execute action `trace("Enter T7__DH3__state_3.");`
            console.log("Enter T7__DH3__state_3.");
        } // end of behavior for T7__DH3__state_3
    }
    
    _T7__DH3__STATE_3_exit()
    {
        // T7__DH3__state_3 behavior
        // uml: exit / { trace("Exit T7__DH3__state_3."); }
        {
            // Step 1: execute action `trace("Exit T7__DH3__state_3.");`
            console.log("Exit T7__DH3__state_3.");
        } // end of behavior for T7__DH3__state_3
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__DEEP_HISTORY3_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EVCLOSE] = null;  // no ancestor listens to this event
    }
    
    _T7__DH3__STATE_3_evclose()
    {
        // No ancestor state handles `evclose` event.
        
        // T7__DH3__state_3 behavior
        // uml: evClose [trace_guard("State T7__DH3__state_3: check behavior `evClose TransitionTo(T7__DH3__state_0)`.", true)] / { trace("Transition action `` for T7__DH3__state_3 to T7__DH3__state_0."); } TransitionTo(T7__DH3__state_0)
        if (trace_guard("State T7__DH3__state_3: check behavior `evClose TransitionTo(T7__DH3__state_0)`.", true))
        {
            // Step 1: Exit states until we reach `T7__DEEP_HISTORY3` state (Least Common Ancestor for transition).
            this._T7__DH3__STATE_3_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for T7__DH3__state_3 to T7__DH3__state_0.");`.
            console.log("Transition action `` for T7__DH3__state_3 to T7__DH3__state_0.");
            
            // Step 3: Enter/move towards transition target `T7__DH3__state_0`.
            this._T7__DH3__STATE_0_enter();
            
            // Finish transition by calling pseudo state transition function.
            this._T7__DH3__state_0_InitialState_transition();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for T7__DH3__state_3
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__HISTORY1
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__HISTORY1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__HISTORY1_exit;
        
        // T7__HISTORY1 behavior
        // uml: enter / { trace("Enter T7__HISTORY1."); }
        {
            // Step 1: execute action `trace("Enter T7__HISTORY1.");`
            console.log("Enter T7__HISTORY1.");
        } // end of behavior for T7__HISTORY1
    }
    
    _T7__HISTORY1_exit()
    {
        // T7__HISTORY1 behavior
        // uml: exit / { trace("Exit T7__HISTORY1."); }
        {
            // Step 1: execute action `trace("Exit T7__HISTORY1.");`
            console.log("Exit T7__HISTORY1.");
        } // end of behavior for T7__HISTORY1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST7_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__H1__OFF
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__H1__OFF_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__H1__OFF_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV3] = this._T7__H1__OFF_ev3;
        this._currentEventHandlers[Spec2Sm.EventId.EV4] = this._T7__H1__OFF_ev4;
        this._currentEventHandlers[Spec2Sm.EventId.EV7] = this._T7__H1__OFF_ev7;
        
        // T7__H1__OFF behavior
        // uml: enter / { trace("Enter T7__H1__OFF."); }
        {
            // Step 1: execute action `trace("Enter T7__H1__OFF.");`
            console.log("Enter T7__H1__OFF.");
        } // end of behavior for T7__H1__OFF
    }
    
    _T7__H1__OFF_exit()
    {
        // T7__H1__OFF behavior
        // uml: exit / { trace("Exit T7__H1__OFF."); }
        {
            // Step 1: execute action `trace("Exit T7__H1__OFF.");`
            console.log("Exit T7__H1__OFF.");
        } // end of behavior for T7__H1__OFF
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__HISTORY1_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV3] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV4] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV7] = null;  // no ancestor listens to this event
    }
    
    _T7__H1__OFF_ev3()
    {
        // No ancestor state handles `ev3` event.
        
        // T7__H1__OFF behavior
        // uml: EV3 [trace_guard("State T7__H1__OFF: check behavior `EV3 TransitionTo(T7__H1__OFF3)`.", true)] / { trace("Transition action `` for T7__H1__OFF to T7__H1__OFF3."); } TransitionTo(T7__H1__OFF3)
        if (trace_guard("State T7__H1__OFF: check behavior `EV3 TransitionTo(T7__H1__OFF3)`.", true))
        {
            // Step 1: Exit states until we reach `T7__H1__OFF` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._T7__H1__OFF_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for T7__H1__OFF to T7__H1__OFF3.");`.
            console.log("Transition action `` for T7__H1__OFF to T7__H1__OFF3.");
            
            // Step 3: Enter/move towards transition target `T7__H1__OFF3`.
            this._T7__H1__OFF3_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__H1__OFF3;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for T7__H1__OFF
    }
    
    _T7__H1__OFF_ev4()
    {
        // No ancestor state handles `ev4` event.
        
        // T7__H1__OFF behavior
        // uml: EV4 [trace_guard("State T7__H1__OFF: check behavior `EV4 TransitionTo(T7__H1__OFF)`.", true)] / { trace("Transition action `` for T7__H1__OFF to T7__H1__OFF."); } TransitionTo(T7__H1__OFF)
        if (trace_guard("State T7__H1__OFF: check behavior `EV4 TransitionTo(T7__H1__OFF)`.", true))
        {
            // Step 1: Exit states until we reach `T7__HISTORY1` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._T7__HISTORY1_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for T7__H1__OFF to T7__H1__OFF.");`.
            console.log("Transition action `` for T7__H1__OFF to T7__H1__OFF.");
            
            // Step 3: Enter/move towards transition target `T7__H1__OFF`.
            this._T7__H1__OFF_enter();
            
            // Finish transition by calling pseudo state transition function.
            this._T7__H1__OFF_InitialState_transition();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for T7__H1__OFF
    }
    
    _T7__H1__OFF_ev7()
    {
        // No ancestor state handles `ev7` event.
        
        // T7__H1__OFF behavior
        // uml: EV7 [trace_guard("State T7__H1__OFF: check behavior `EV7 TransitionTo(T7__H1__ON)`.", true)] / { trace("Transition action `` for T7__H1__OFF to T7__H1__ON."); } TransitionTo(T7__H1__ON)
        if (trace_guard("State T7__H1__OFF: check behavior `EV7 TransitionTo(T7__H1__ON)`.", true))
        {
            // Step 1: Exit states until we reach `T7__HISTORY1` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._T7__HISTORY1_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for T7__H1__OFF to T7__H1__ON.");`.
            console.log("Transition action `` for T7__H1__OFF to T7__H1__ON.");
            
            // Step 3: Enter/move towards transition target `T7__H1__ON`.
            this._T7__H1__ON_enter();
            
            // Finish transition by calling pseudo state transition function.
            this._T7__H1__ON_InitialState_transition();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for T7__H1__OFF
    }
    
    _T7__H1__OFF_InitialState_transition()
    {
        // T7__H1__OFF.InitialState behavior
        // uml: / { trace("Transition action `` for T7__H1__OFF.InitialState to T7__H1__OFF.History."); } TransitionTo(T7__H1__OFF.History)
        {
            // Step 1: Exit states until we reach `T7__H1__OFF` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for T7__H1__OFF.InitialState to T7__H1__OFF.History.");`.
            console.log("Transition action `` for T7__H1__OFF.InitialState to T7__H1__OFF.History.");
            
            // Step 3: Enter/move towards transition target `T7__H1__OFF.History`.
            // T7__H1__OFF.History is a pseudo state and cannot have an `enter` trigger.
            
            // T7__H1__OFF.History behavior
            // uml: [this.vars.T7__H1__OFF_history == T7__H1__OFF_HistoryId.T7__H1__OFF2] / { trace("Transition action `` for T7__H1__OFF.History to T7__H1__OFF2."); } TransitionTo(T7__H1__OFF2)
            if (this.vars.T7__H1__OFF_history == Spec2Sm.T7__H1__OFF_HistoryId.T7__H1__OFF2)
            {
                // Step 1: Exit states until we reach `T7__H1__OFF` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__H1__OFF.History to T7__H1__OFF2.");`.
                trace("Transition action `` for T7__H1__OFF.History to T7__H1__OFF2.");
                
                // Step 3: Enter/move towards transition target `T7__H1__OFF2`.
                this._T7__H1__OFF2_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.T7__H1__OFF2;
                this._ancestorEventHandler = null;
                return;
            } // end of behavior for T7__H1__OFF.History
            
            // T7__H1__OFF.History behavior
            // uml: [this.vars.T7__H1__OFF_history == T7__H1__OFF_HistoryId.T7__H1__OFF3] / { trace("Transition action `` for T7__H1__OFF.History to T7__H1__OFF3."); } TransitionTo(T7__H1__OFF3)
            if (this.vars.T7__H1__OFF_history == Spec2Sm.T7__H1__OFF_HistoryId.T7__H1__OFF3)
            {
                // Step 1: Exit states until we reach `T7__H1__OFF` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__H1__OFF.History to T7__H1__OFF3.");`.
                trace("Transition action `` for T7__H1__OFF.History to T7__H1__OFF3.");
                
                // Step 3: Enter/move towards transition target `T7__H1__OFF3`.
                this._T7__H1__OFF3_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.T7__H1__OFF3;
                this._ancestorEventHandler = null;
                return;
            } // end of behavior for T7__H1__OFF.History
            
            // T7__H1__OFF.History behavior
            // uml: else / { trace("Transition action `` for T7__H1__OFF.History to T7__H1__OFF1."); } TransitionTo(T7__H1__OFF1)
            {
                // Step 1: Exit states until we reach `T7__H1__OFF` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__H1__OFF.History to T7__H1__OFF1.");`.
                console.log("Transition action `` for T7__H1__OFF.History to T7__H1__OFF1.");
                
                // Step 3: Enter/move towards transition target `T7__H1__OFF1`.
                this._T7__H1__OFF1_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.T7__H1__OFF1;
                this._ancestorEventHandler = null;
                return;
            } // end of behavior for T7__H1__OFF.History
        } // end of behavior for T7__H1__OFF.InitialState
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__H1__OFF1
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__H1__OFF1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__H1__OFF1_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._T7__H1__OFF1_ev1;
        
        // T7__H1__OFF1 behavior
        // uml: enter / { trace("Enter T7__H1__OFF1."); }
        {
            // Step 1: execute action `trace("Enter T7__H1__OFF1.");`
            console.log("Enter T7__H1__OFF1.");
        } // end of behavior for T7__H1__OFF1
        
        // T7__H1__OFF1 behavior
        // uml: enter [trace_guard("State T7__H1__OFF1: check behavior `enter / { this.vars.T7__H1__OFF_history = T7__H1__OFF_HistoryId.T7__H1__OFF1; }`.", true)] / { this.vars.T7__H1__OFF_history = T7__H1__OFF_HistoryId.T7__H1__OFF1; }
        if (trace_guard("State T7__H1__OFF1: check behavior `enter / { this.vars.T7__H1__OFF_history = T7__H1__OFF_HistoryId.T7__H1__OFF1; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__H1__OFF_history = T7__H1__OFF_HistoryId.T7__H1__OFF1;`
            this.vars.T7__H1__OFF_history = Spec2Sm.T7__H1__OFF_HistoryId.T7__H1__OFF1;
        } // end of behavior for T7__H1__OFF1
    }
    
    _T7__H1__OFF1_exit()
    {
        // T7__H1__OFF1 behavior
        // uml: exit / { trace("Exit T7__H1__OFF1."); }
        {
            // Step 1: execute action `trace("Exit T7__H1__OFF1.");`
            console.log("Exit T7__H1__OFF1.");
        } // end of behavior for T7__H1__OFF1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__H1__OFF_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _T7__H1__OFF1_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // T7__H1__OFF1 behavior
        // uml: EV1 [trace_guard("State T7__H1__OFF1: check behavior `EV1 TransitionTo(T7__H1__OFF2)`.", true)] / { trace("Transition action `` for T7__H1__OFF1 to T7__H1__OFF2."); } TransitionTo(T7__H1__OFF2)
        if (trace_guard("State T7__H1__OFF1: check behavior `EV1 TransitionTo(T7__H1__OFF2)`.", true))
        {
            // Step 1: Exit states until we reach `T7__H1__OFF` state (Least Common Ancestor for transition).
            this._T7__H1__OFF1_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for T7__H1__OFF1 to T7__H1__OFF2.");`.
            console.log("Transition action `` for T7__H1__OFF1 to T7__H1__OFF2.");
            
            // Step 3: Enter/move towards transition target `T7__H1__OFF2`.
            this._T7__H1__OFF2_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__H1__OFF2;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for T7__H1__OFF1
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__H1__OFF2
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__H1__OFF2_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__H1__OFF2_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._T7__H1__OFF2_ev1;
        
        // T7__H1__OFF2 behavior
        // uml: enter / { trace("Enter T7__H1__OFF2."); }
        {
            // Step 1: execute action `trace("Enter T7__H1__OFF2.");`
            console.log("Enter T7__H1__OFF2.");
        } // end of behavior for T7__H1__OFF2
        
        // T7__H1__OFF2 behavior
        // uml: enter [trace_guard("State T7__H1__OFF2: check behavior `enter / { this.vars.T7__H1__OFF_history = T7__H1__OFF_HistoryId.T7__H1__OFF2; }`.", true)] / { this.vars.T7__H1__OFF_history = T7__H1__OFF_HistoryId.T7__H1__OFF2; }
        if (trace_guard("State T7__H1__OFF2: check behavior `enter / { this.vars.T7__H1__OFF_history = T7__H1__OFF_HistoryId.T7__H1__OFF2; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__H1__OFF_history = T7__H1__OFF_HistoryId.T7__H1__OFF2;`
            this.vars.T7__H1__OFF_history = Spec2Sm.T7__H1__OFF_HistoryId.T7__H1__OFF2;
        } // end of behavior for T7__H1__OFF2
    }
    
    _T7__H1__OFF2_exit()
    {
        // T7__H1__OFF2 behavior
        // uml: exit / { trace("Exit T7__H1__OFF2."); }
        {
            // Step 1: execute action `trace("Exit T7__H1__OFF2.");`
            console.log("Exit T7__H1__OFF2.");
        } // end of behavior for T7__H1__OFF2
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__H1__OFF_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _T7__H1__OFF2_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // T7__H1__OFF2 behavior
        // uml: EV1 [trace_guard("State T7__H1__OFF2: check behavior `EV1 TransitionTo(T7__H1__OFF3)`.", true)] / { trace("Transition action `` for T7__H1__OFF2 to T7__H1__OFF3."); } TransitionTo(T7__H1__OFF3)
        if (trace_guard("State T7__H1__OFF2: check behavior `EV1 TransitionTo(T7__H1__OFF3)`.", true))
        {
            // Step 1: Exit states until we reach `T7__H1__OFF` state (Least Common Ancestor for transition).
            this._T7__H1__OFF2_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for T7__H1__OFF2 to T7__H1__OFF3.");`.
            console.log("Transition action `` for T7__H1__OFF2 to T7__H1__OFF3.");
            
            // Step 3: Enter/move towards transition target `T7__H1__OFF3`.
            this._T7__H1__OFF3_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__H1__OFF3;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for T7__H1__OFF2
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__H1__OFF3
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__H1__OFF3_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__H1__OFF3_exit;
        
        // T7__H1__OFF3 behavior
        // uml: enter / { trace("Enter T7__H1__OFF3."); }
        {
            // Step 1: execute action `trace("Enter T7__H1__OFF3.");`
            console.log("Enter T7__H1__OFF3.");
        } // end of behavior for T7__H1__OFF3
        
        // T7__H1__OFF3 behavior
        // uml: enter [trace_guard("State T7__H1__OFF3: check behavior `enter / { this.vars.T7__H1__OFF_history = T7__H1__OFF_HistoryId.T7__H1__OFF3; }`.", true)] / { this.vars.T7__H1__OFF_history = T7__H1__OFF_HistoryId.T7__H1__OFF3; }
        if (trace_guard("State T7__H1__OFF3: check behavior `enter / { this.vars.T7__H1__OFF_history = T7__H1__OFF_HistoryId.T7__H1__OFF3; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__H1__OFF_history = T7__H1__OFF_HistoryId.T7__H1__OFF3;`
            this.vars.T7__H1__OFF_history = Spec2Sm.T7__H1__OFF_HistoryId.T7__H1__OFF3;
        } // end of behavior for T7__H1__OFF3
    }
    
    _T7__H1__OFF3_exit()
    {
        // T7__H1__OFF3 behavior
        // uml: exit / { trace("Exit T7__H1__OFF3."); }
        {
            // Step 1: execute action `trace("Exit T7__H1__OFF3.");`
            console.log("Exit T7__H1__OFF3.");
        } // end of behavior for T7__H1__OFF3
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__H1__OFF_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__H1__ON
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__H1__ON_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__H1__ON_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV6] = this._T7__H1__ON_ev6;
        
        // T7__H1__ON behavior
        // uml: enter / { trace("Enter T7__H1__ON."); }
        {
            // Step 1: execute action `trace("Enter T7__H1__ON.");`
            console.log("Enter T7__H1__ON.");
        } // end of behavior for T7__H1__ON
    }
    
    _T7__H1__ON_exit()
    {
        // T7__H1__ON behavior
        // uml: exit / { trace("Exit T7__H1__ON."); }
        {
            // Step 1: execute action `trace("Exit T7__H1__ON.");`
            console.log("Exit T7__H1__ON.");
        } // end of behavior for T7__H1__ON
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__HISTORY1_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV6] = null;  // no ancestor listens to this event
    }
    
    _T7__H1__ON_ev6()
    {
        // No ancestor state handles `ev6` event.
        
        // T7__H1__ON behavior
        // uml: EV6 [trace_guard("State T7__H1__ON: check behavior `EV6 TransitionTo(T7__H1__OFF)`.", true)] / { trace("Transition action `` for T7__H1__ON to T7__H1__OFF."); } TransitionTo(T7__H1__OFF)
        if (trace_guard("State T7__H1__ON: check behavior `EV6 TransitionTo(T7__H1__OFF)`.", true))
        {
            // Step 1: Exit states until we reach `T7__HISTORY1` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._T7__HISTORY1_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for T7__H1__ON to T7__H1__OFF.");`.
            console.log("Transition action `` for T7__H1__ON to T7__H1__OFF.");
            
            // Step 3: Enter/move towards transition target `T7__H1__OFF`.
            this._T7__H1__OFF_enter();
            
            // Finish transition by calling pseudo state transition function.
            this._T7__H1__OFF_InitialState_transition();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for T7__H1__ON
    }
    
    _T7__H1__ON_InitialState_transition()
    {
        // T7__H1__ON.InitialState behavior
        // uml: / { trace("Transition action `` for T7__H1__ON.InitialState to T7__H1__ON.History."); } TransitionTo(T7__H1__ON.History)
        {
            // Step 1: Exit states until we reach `T7__H1__ON` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for T7__H1__ON.InitialState to T7__H1__ON.History.");`.
            console.log("Transition action `` for T7__H1__ON.InitialState to T7__H1__ON.History.");
            
            // Step 3: Enter/move towards transition target `T7__H1__ON.History`.
            // T7__H1__ON.History is a pseudo state and cannot have an `enter` trigger.
            
            // T7__H1__ON.History behavior
            // uml: [this.vars.T7__H1__ON_history == T7__H1__ON_HistoryId.T7__H1__ON2] / { trace("Transition action `` for T7__H1__ON.History to T7__H1__ON2."); } TransitionTo(T7__H1__ON2)
            if (this.vars.T7__H1__ON_history == Spec2Sm.T7__H1__ON_HistoryId.T7__H1__ON2)
            {
                // Step 1: Exit states until we reach `T7__H1__ON` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__H1__ON.History to T7__H1__ON2.");`.
                trace("Transition action `` for T7__H1__ON.History to T7__H1__ON2.");
                
                // Step 3: Enter/move towards transition target `T7__H1__ON2`.
                this._T7__H1__ON2_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.T7__H1__ON2;
                this._ancestorEventHandler = null;
                return;
            } // end of behavior for T7__H1__ON.History
            
            // T7__H1__ON.History behavior
            // uml: [this.vars.T7__H1__ON_history == T7__H1__ON_HistoryId.T7__H1__ON3] / { trace("Transition action `` for T7__H1__ON.History to T7__H1__ON3."); } TransitionTo(T7__H1__ON3)
            if (this.vars.T7__H1__ON_history == Spec2Sm.T7__H1__ON_HistoryId.T7__H1__ON3)
            {
                // Step 1: Exit states until we reach `T7__H1__ON` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__H1__ON.History to T7__H1__ON3.");`.
                trace("Transition action `` for T7__H1__ON.History to T7__H1__ON3.");
                
                // Step 3: Enter/move towards transition target `T7__H1__ON3`.
                this._T7__H1__ON3_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.T7__H1__ON3;
                this._ancestorEventHandler = null;
                return;
            } // end of behavior for T7__H1__ON.History
            
            // T7__H1__ON.History behavior
            // uml: else / { trace("Transition action `` for T7__H1__ON.History to T7__H1__ON1."); } TransitionTo(T7__H1__ON1)
            {
                // Step 1: Exit states until we reach `T7__H1__ON` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__H1__ON.History to T7__H1__ON1.");`.
                console.log("Transition action `` for T7__H1__ON.History to T7__H1__ON1.");
                
                // Step 3: Enter/move towards transition target `T7__H1__ON1`.
                this._T7__H1__ON1_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.T7__H1__ON1;
                this._ancestorEventHandler = null;
                return;
            } // end of behavior for T7__H1__ON.History
        } // end of behavior for T7__H1__ON.InitialState
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__H1__ON1
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__H1__ON1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__H1__ON1_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._T7__H1__ON1_ev1;
        
        // T7__H1__ON1 behavior
        // uml: enter / { trace("Enter T7__H1__ON1."); }
        {
            // Step 1: execute action `trace("Enter T7__H1__ON1.");`
            console.log("Enter T7__H1__ON1.");
        } // end of behavior for T7__H1__ON1
        
        // T7__H1__ON1 behavior
        // uml: enter [trace_guard("State T7__H1__ON1: check behavior `enter / { this.vars.T7__H1__ON_history = T7__H1__ON_HistoryId.T7__H1__ON1; }`.", true)] / { this.vars.T7__H1__ON_history = T7__H1__ON_HistoryId.T7__H1__ON1; }
        if (trace_guard("State T7__H1__ON1: check behavior `enter / { this.vars.T7__H1__ON_history = T7__H1__ON_HistoryId.T7__H1__ON1; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__H1__ON_history = T7__H1__ON_HistoryId.T7__H1__ON1;`
            this.vars.T7__H1__ON_history = Spec2Sm.T7__H1__ON_HistoryId.T7__H1__ON1;
        } // end of behavior for T7__H1__ON1
    }
    
    _T7__H1__ON1_exit()
    {
        // T7__H1__ON1 behavior
        // uml: exit / { trace("Exit T7__H1__ON1."); }
        {
            // Step 1: execute action `trace("Exit T7__H1__ON1.");`
            console.log("Exit T7__H1__ON1.");
        } // end of behavior for T7__H1__ON1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__H1__ON_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _T7__H1__ON1_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // T7__H1__ON1 behavior
        // uml: EV1 [trace_guard("State T7__H1__ON1: check behavior `EV1 TransitionTo(T7__H1__ON2)`.", true)] / { trace("Transition action `` for T7__H1__ON1 to T7__H1__ON2."); } TransitionTo(T7__H1__ON2)
        if (trace_guard("State T7__H1__ON1: check behavior `EV1 TransitionTo(T7__H1__ON2)`.", true))
        {
            // Step 1: Exit states until we reach `T7__H1__ON` state (Least Common Ancestor for transition).
            this._T7__H1__ON1_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for T7__H1__ON1 to T7__H1__ON2.");`.
            console.log("Transition action `` for T7__H1__ON1 to T7__H1__ON2.");
            
            // Step 3: Enter/move towards transition target `T7__H1__ON2`.
            this._T7__H1__ON2_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__H1__ON2;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for T7__H1__ON1
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__H1__ON2
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__H1__ON2_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__H1__ON2_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._T7__H1__ON2_ev1;
        
        // T7__H1__ON2 behavior
        // uml: enter / { trace("Enter T7__H1__ON2."); }
        {
            // Step 1: execute action `trace("Enter T7__H1__ON2.");`
            console.log("Enter T7__H1__ON2.");
        } // end of behavior for T7__H1__ON2
        
        // T7__H1__ON2 behavior
        // uml: enter [trace_guard("State T7__H1__ON2: check behavior `enter / { this.vars.T7__H1__ON_history = T7__H1__ON_HistoryId.T7__H1__ON2; }`.", true)] / { this.vars.T7__H1__ON_history = T7__H1__ON_HistoryId.T7__H1__ON2; }
        if (trace_guard("State T7__H1__ON2: check behavior `enter / { this.vars.T7__H1__ON_history = T7__H1__ON_HistoryId.T7__H1__ON2; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__H1__ON_history = T7__H1__ON_HistoryId.T7__H1__ON2;`
            this.vars.T7__H1__ON_history = Spec2Sm.T7__H1__ON_HistoryId.T7__H1__ON2;
        } // end of behavior for T7__H1__ON2
    }
    
    _T7__H1__ON2_exit()
    {
        // T7__H1__ON2 behavior
        // uml: exit / { trace("Exit T7__H1__ON2."); }
        {
            // Step 1: execute action `trace("Exit T7__H1__ON2.");`
            console.log("Exit T7__H1__ON2.");
        } // end of behavior for T7__H1__ON2
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__H1__ON_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _T7__H1__ON2_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // T7__H1__ON2 behavior
        // uml: EV1 [trace_guard("State T7__H1__ON2: check behavior `EV1 TransitionTo(T7__H1__ON3)`.", true)] / { trace("Transition action `` for T7__H1__ON2 to T7__H1__ON3."); } TransitionTo(T7__H1__ON3)
        if (trace_guard("State T7__H1__ON2: check behavior `EV1 TransitionTo(T7__H1__ON3)`.", true))
        {
            // Step 1: Exit states until we reach `T7__H1__ON` state (Least Common Ancestor for transition).
            this._T7__H1__ON2_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for T7__H1__ON2 to T7__H1__ON3.");`.
            console.log("Transition action `` for T7__H1__ON2 to T7__H1__ON3.");
            
            // Step 3: Enter/move towards transition target `T7__H1__ON3`.
            this._T7__H1__ON3_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__H1__ON3;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for T7__H1__ON2
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__H1__ON3
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__H1__ON3_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__H1__ON3_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._T7__H1__ON3_ev1;
        
        // T7__H1__ON3 behavior
        // uml: enter / { trace("Enter T7__H1__ON3."); }
        {
            // Step 1: execute action `trace("Enter T7__H1__ON3.");`
            console.log("Enter T7__H1__ON3.");
        } // end of behavior for T7__H1__ON3
        
        // T7__H1__ON3 behavior
        // uml: enter [trace_guard("State T7__H1__ON3: check behavior `enter / { this.vars.T7__H1__ON_history = T7__H1__ON_HistoryId.T7__H1__ON3; }`.", true)] / { this.vars.T7__H1__ON_history = T7__H1__ON_HistoryId.T7__H1__ON3; }
        if (trace_guard("State T7__H1__ON3: check behavior `enter / { this.vars.T7__H1__ON_history = T7__H1__ON_HistoryId.T7__H1__ON3; }`.", true))
        {
            // Step 1: execute action `this.vars.T7__H1__ON_history = T7__H1__ON_HistoryId.T7__H1__ON3;`
            this.vars.T7__H1__ON_history = Spec2Sm.T7__H1__ON_HistoryId.T7__H1__ON3;
        } // end of behavior for T7__H1__ON3
    }
    
    _T7__H1__ON3_exit()
    {
        // T7__H1__ON3 behavior
        // uml: exit / { trace("Exit T7__H1__ON3."); }
        {
            // Step 1: execute action `trace("Exit T7__H1__ON3.");`
            console.log("Exit T7__H1__ON3.");
        } // end of behavior for T7__H1__ON3
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__H1__ON_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _T7__H1__ON3_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // T7__H1__ON3 behavior
        // uml: EV1 [trace_guard("State T7__H1__ON3: check behavior `EV1 TransitionTo(T7__H1__ON1)`.", true)] / { trace("Transition action `` for T7__H1__ON3 to T7__H1__ON1."); } TransitionTo(T7__H1__ON1)
        if (trace_guard("State T7__H1__ON3: check behavior `EV1 TransitionTo(T7__H1__ON1)`.", true))
        {
            // Step 1: Exit states until we reach `T7__H1__ON` state (Least Common Ancestor for transition).
            this._T7__H1__ON3_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for T7__H1__ON3 to T7__H1__ON1.");`.
            console.log("Transition action `` for T7__H1__ON3 to T7__H1__ON1.");
            
            // Step 3: Enter/move towards transition target `T7__H1__ON1`.
            this._T7__H1__ON1_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__H1__ON1;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for T7__H1__ON3
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__INITIAL1
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__INITIAL1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__INITIAL1_exit;
        
        // T7__INITIAL1 behavior
        // uml: enter / { trace("Enter T7__INITIAL1."); }
        {
            // Step 1: execute action `trace("Enter T7__INITIAL1.");`
            console.log("Enter T7__INITIAL1.");
        } // end of behavior for T7__INITIAL1
    }
    
    _T7__INITIAL1_exit()
    {
        // T7__INITIAL1 behavior
        // uml: exit / { trace("Exit T7__INITIAL1."); }
        {
            // Step 1: execute action `trace("Exit T7__INITIAL1.");`
            console.log("Exit T7__INITIAL1.");
        } // end of behavior for T7__INITIAL1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST7_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__INITIAL1__PARENT
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__INITIAL1__PARENT_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__INITIAL1__PARENT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV5] = this._T7__INITIAL1__PARENT_ev5;
        
        // T7__INITIAL1__PARENT behavior
        // uml: enter / { trace("Enter T7__INITIAL1__PARENT."); }
        {
            // Step 1: execute action `trace("Enter T7__INITIAL1__PARENT.");`
            console.log("Enter T7__INITIAL1__PARENT.");
        } // end of behavior for T7__INITIAL1__PARENT
    }
    
    _T7__INITIAL1__PARENT_exit()
    {
        // T7__INITIAL1__PARENT behavior
        // uml: exit / { trace("Exit T7__INITIAL1__PARENT."); }
        {
            // Step 1: execute action `trace("Exit T7__INITIAL1__PARENT.");`
            console.log("Exit T7__INITIAL1__PARENT.");
        } // end of behavior for T7__INITIAL1__PARENT
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__INITIAL1_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV5] = null;  // no ancestor listens to this event
    }
    
    _T7__INITIAL1__PARENT_ev5()
    {
        // No ancestor state handles `ev5` event.
        
        // T7__INITIAL1__PARENT behavior
        // uml: EV5 [trace_guard("State T7__INITIAL1__PARENT: check behavior `EV5 / { count++; }`.", true)] / { count++; }
        if (trace_guard("State T7__INITIAL1__PARENT: check behavior `EV5 / { count++; }`.", true))
        {
            // Step 1: execute action `count++;`
            this.vars.count++;
            
            // Step 2: determine if ancestor gets to handle event next.
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
        } // end of behavior for T7__INITIAL1__PARENT
    }
    
    _T7__INITIAL1__PARENT_InitialState_transition()
    {
        // T7__INITIAL1__PARENT.InitialState behavior
        // uml: / { trace("Transition action `` for T7__INITIAL1__PARENT.InitialState to T7__INITIAL1__S1."); } TransitionTo(T7__INITIAL1__S1)
        {
            // Step 1: Exit states until we reach `T7__INITIAL1__PARENT` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for T7__INITIAL1__PARENT.InitialState to T7__INITIAL1__S1.");`.
            console.log("Transition action `` for T7__INITIAL1__PARENT.InitialState to T7__INITIAL1__S1.");
            
            // Step 3: Enter/move towards transition target `T7__INITIAL1__S1`.
            this._T7__INITIAL1__S1_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__INITIAL1__S1;
            this._ancestorEventHandler = null;
            return;
        } // end of behavior for T7__INITIAL1__PARENT.InitialState
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__INITIAL1__G
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__INITIAL1__G_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__INITIAL1__G_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = this._T7__INITIAL1__G_ev2;
        
        // T7__INITIAL1__G behavior
        // uml: enter / { trace("Enter T7__INITIAL1__G."); }
        {
            // Step 1: execute action `trace("Enter T7__INITIAL1__G.");`
            console.log("Enter T7__INITIAL1__G.");
        } // end of behavior for T7__INITIAL1__G
    }
    
    _T7__INITIAL1__G_exit()
    {
        // T7__INITIAL1__G behavior
        // uml: exit / { trace("Exit T7__INITIAL1__G."); }
        {
            // Step 1: execute action `trace("Exit T7__INITIAL1__G.");`
            console.log("Exit T7__INITIAL1__G.");
        } // end of behavior for T7__INITIAL1__G
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__INITIAL1__PARENT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = null;  // no ancestor listens to this event
    }
    
    _T7__INITIAL1__G_ev2()
    {
        // No ancestor state handles `ev2` event.
        
        // T7__INITIAL1__G behavior
        // uml: EV2 [trace_guard("State T7__INITIAL1__G: check behavior `EV2 TransitionTo(T7__INITIAL1__PARENT.InitialState)`.", true)] / { trace("Transition action `` for T7__INITIAL1__G to T7__INITIAL1__PARENT.InitialState."); } TransitionTo(T7__INITIAL1__PARENT.InitialState)
        if (trace_guard("State T7__INITIAL1__G: check behavior `EV2 TransitionTo(T7__INITIAL1__PARENT.InitialState)`.", true))
        {
            // Step 1: Exit states until we reach `T7__INITIAL1__PARENT` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._T7__INITIAL1__PARENT_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for T7__INITIAL1__G to T7__INITIAL1__PARENT.InitialState.");`.
            console.log("Transition action `` for T7__INITIAL1__G to T7__INITIAL1__PARENT.InitialState.");
            
            // Step 3: Enter/move towards transition target `T7__INITIAL1__PARENT.InitialState`.
            // T7__INITIAL1__PARENT.InitialState is a pseudo state and cannot have an `enter` trigger.
            
            // Finish transition by calling pseudo state transition function.
            this._T7__INITIAL1__PARENT_InitialState_transition();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for T7__INITIAL1__G
    }
    
    _T7__INITIAL1__G_InitialState_transition()
    {
        // T7__INITIAL1__G.InitialState behavior
        // uml: [count == 1] / { trace("Transition action `` for T7__INITIAL1__G.InitialState to T7__INITIAL1__G_S1."); } TransitionTo(T7__INITIAL1__G_S1)
        if (this.vars.count == 1)
        {
            // Step 1: Exit states until we reach `T7__INITIAL1__G` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for T7__INITIAL1__G.InitialState to T7__INITIAL1__G_S1.");`.
            console.log("Transition action `` for T7__INITIAL1__G.InitialState to T7__INITIAL1__G_S1.");
            
            // Step 3: Enter/move towards transition target `T7__INITIAL1__G_S1`.
            this._T7__INITIAL1__G_S1_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__INITIAL1__G_S1;
            this._ancestorEventHandler = null;
            return;
        } // end of behavior for T7__INITIAL1__G.InitialState
        
        // T7__INITIAL1__G.InitialState behavior
        // uml: [count == 2] / { trace("Transition action `` for T7__INITIAL1__G.InitialState to T7__INITIAL1__G_S2."); } TransitionTo(T7__INITIAL1__G_S2)
        if (this.vars.count == 2)
        {
            // Step 1: Exit states until we reach `T7__INITIAL1__G` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for T7__INITIAL1__G.InitialState to T7__INITIAL1__G_S2.");`.
            console.log("Transition action `` for T7__INITIAL1__G.InitialState to T7__INITIAL1__G_S2.");
            
            // Step 3: Enter/move towards transition target `T7__INITIAL1__G_S2`.
            this._T7__INITIAL1__G_S2_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__INITIAL1__G_S2;
            this._ancestorEventHandler = null;
            return;
        } // end of behavior for T7__INITIAL1__G.InitialState
        
        // T7__INITIAL1__G.InitialState behavior
        // uml: else / { trace("Transition action `` for T7__INITIAL1__G.InitialState to T7__INITIAL1__G_S3."); } TransitionTo(T7__INITIAL1__G_S3)
        {
            // Step 1: Exit states until we reach `T7__INITIAL1__G` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for T7__INITIAL1__G.InitialState to T7__INITIAL1__G_S3.");`.
            console.log("Transition action `` for T7__INITIAL1__G.InitialState to T7__INITIAL1__G_S3.");
            
            // Step 3: Enter/move towards transition target `T7__INITIAL1__G_S3`.
            this._T7__INITIAL1__G_S3_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.T7__INITIAL1__G_S3;
            this._ancestorEventHandler = null;
            return;
        } // end of behavior for T7__INITIAL1__G.InitialState
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__INITIAL1__G_S1
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__INITIAL1__G_S1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__INITIAL1__G_S1_exit;
        
        // T7__INITIAL1__G_S1 behavior
        // uml: enter / { trace("Enter T7__INITIAL1__G_S1."); }
        {
            // Step 1: execute action `trace("Enter T7__INITIAL1__G_S1.");`
            console.log("Enter T7__INITIAL1__G_S1.");
        } // end of behavior for T7__INITIAL1__G_S1
    }
    
    _T7__INITIAL1__G_S1_exit()
    {
        // T7__INITIAL1__G_S1 behavior
        // uml: exit / { trace("Exit T7__INITIAL1__G_S1."); }
        {
            // Step 1: execute action `trace("Exit T7__INITIAL1__G_S1.");`
            console.log("Exit T7__INITIAL1__G_S1.");
        } // end of behavior for T7__INITIAL1__G_S1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__INITIAL1__G_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__INITIAL1__G_S2
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__INITIAL1__G_S2_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__INITIAL1__G_S2_exit;
        
        // T7__INITIAL1__G_S2 behavior
        // uml: enter / { trace("Enter T7__INITIAL1__G_S2."); }
        {
            // Step 1: execute action `trace("Enter T7__INITIAL1__G_S2.");`
            console.log("Enter T7__INITIAL1__G_S2.");
        } // end of behavior for T7__INITIAL1__G_S2
    }
    
    _T7__INITIAL1__G_S2_exit()
    {
        // T7__INITIAL1__G_S2 behavior
        // uml: exit / { trace("Exit T7__INITIAL1__G_S2."); }
        {
            // Step 1: execute action `trace("Exit T7__INITIAL1__G_S2.");`
            console.log("Exit T7__INITIAL1__G_S2.");
        } // end of behavior for T7__INITIAL1__G_S2
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__INITIAL1__G_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__INITIAL1__G_S3
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__INITIAL1__G_S3_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__INITIAL1__G_S3_exit;
        
        // T7__INITIAL1__G_S3 behavior
        // uml: enter / { trace("Enter T7__INITIAL1__G_S3."); }
        {
            // Step 1: execute action `trace("Enter T7__INITIAL1__G_S3.");`
            console.log("Enter T7__INITIAL1__G_S3.");
        } // end of behavior for T7__INITIAL1__G_S3
    }
    
    _T7__INITIAL1__G_S3_exit()
    {
        // T7__INITIAL1__G_S3 behavior
        // uml: exit / { trace("Exit T7__INITIAL1__G_S3."); }
        {
            // Step 1: execute action `trace("Exit T7__INITIAL1__G_S3.");`
            console.log("Exit T7__INITIAL1__G_S3.");
        } // end of behavior for T7__INITIAL1__G_S3
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__INITIAL1__G_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state T7__INITIAL1__S1
    ////////////////////////////////////////////////////////////////////////////////
    
    _T7__INITIAL1__S1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._T7__INITIAL1__S1_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._T7__INITIAL1__S1_ev1;
        this._currentEventHandlers[Spec2Sm.EventId.EV3] = this._T7__INITIAL1__S1_ev3;
        
        // T7__INITIAL1__S1 behavior
        // uml: enter / { trace("Enter T7__INITIAL1__S1."); }
        {
            // Step 1: execute action `trace("Enter T7__INITIAL1__S1.");`
            console.log("Enter T7__INITIAL1__S1.");
        } // end of behavior for T7__INITIAL1__S1
    }
    
    _T7__INITIAL1__S1_exit()
    {
        // T7__INITIAL1__S1 behavior
        // uml: exit / { trace("Exit T7__INITIAL1__S1."); }
        {
            // Step 1: execute action `trace("Exit T7__INITIAL1__S1.");`
            console.log("Exit T7__INITIAL1__S1.");
        } // end of behavior for T7__INITIAL1__S1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._T7__INITIAL1__PARENT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV3] = null;  // no ancestor listens to this event
    }
    
    _T7__INITIAL1__S1_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // T7__INITIAL1__S1 behavior
        // uml: EV1 [trace_guard("State T7__INITIAL1__S1: check behavior `EV1 TransitionTo(T7__INITIAL1__G)`.", true)] / { trace("Transition action `` for T7__INITIAL1__S1 to T7__INITIAL1__G."); } TransitionTo(T7__INITIAL1__G)
        if (trace_guard("State T7__INITIAL1__S1: check behavior `EV1 TransitionTo(T7__INITIAL1__G)`.", true))
        {
            // Step 1: Exit states until we reach `T7__INITIAL1__PARENT` state (Least Common Ancestor for transition).
            this._T7__INITIAL1__S1_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for T7__INITIAL1__S1 to T7__INITIAL1__G.");`.
            console.log("Transition action `` for T7__INITIAL1__S1 to T7__INITIAL1__G.");
            
            // Step 3: Enter/move towards transition target `T7__INITIAL1__G`.
            this._T7__INITIAL1__G_enter();
            
            // Finish transition by calling pseudo state transition function.
            this._T7__INITIAL1__G_InitialState_transition();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for T7__INITIAL1__S1
    }
    
    _T7__INITIAL1__S1_ev3()
    {
        // No ancestor state handles `ev3` event.
        
        // T7__INITIAL1__S1 behavior
        // uml: EV3 [trace_guard("State T7__INITIAL1__S1: check behavior `EV3 TransitionTo(T7__INITIAL1__G.InitialState)`.", true)] / { trace("Transition action `` for T7__INITIAL1__S1 to T7__INITIAL1__G.InitialState."); } TransitionTo(T7__INITIAL1__G.InitialState)
        if (trace_guard("State T7__INITIAL1__S1: check behavior `EV3 TransitionTo(T7__INITIAL1__G.InitialState)`.", true))
        {
            // Step 1: Exit states until we reach `T7__INITIAL1__PARENT` state (Least Common Ancestor for transition).
            this._T7__INITIAL1__S1_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for T7__INITIAL1__S1 to T7__INITIAL1__G.InitialState.");`.
            console.log("Transition action `` for T7__INITIAL1__S1 to T7__INITIAL1__G.InitialState.");
            
            // Step 3: Enter/move towards transition target `T7__INITIAL1__G.InitialState`.
            this._T7__INITIAL1__G_enter();
            // T7__INITIAL1__G.InitialState is a pseudo state and cannot have an `enter` trigger.
            
            // Finish transition by calling pseudo state transition function.
            this._T7__INITIAL1__G_InitialState_transition();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for T7__INITIAL1__S1
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST7_DECIDE
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST7_DECIDE_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST7_DECIDE_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST7_DECIDE_ev1;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = this._TEST7_DECIDE_ev2;
        this._currentEventHandlers[Spec2Sm.EventId.EV3] = this._TEST7_DECIDE_ev3;
        this._currentEventHandlers[Spec2Sm.EventId.EV4] = this._TEST7_DECIDE_ev4;
        this._currentEventHandlers[Spec2Sm.EventId.EV5] = this._TEST7_DECIDE_ev5;
        
        // TEST7_DECIDE behavior
        // uml: enter / { trace("Enter TEST7_DECIDE."); }
        {
            // Step 1: execute action `trace("Enter TEST7_DECIDE.");`
            console.log("Enter TEST7_DECIDE.");
        } // end of behavior for TEST7_DECIDE
    }
    
    _TEST7_DECIDE_exit()
    {
        // TEST7_DECIDE behavior
        // uml: exit / { trace("Exit TEST7_DECIDE."); }
        {
            // Step 1: execute action `trace("Exit TEST7_DECIDE.");`
            console.log("Exit TEST7_DECIDE.");
        } // end of behavior for TEST7_DECIDE
        
        // TEST7_DECIDE behavior
        // uml: exit [trace_guard("State TEST7_DECIDE: check behavior `exit / { clear_dispatch_output(); }`.", true)] / { clear_dispatch_output(); }
        if (trace_guard("State TEST7_DECIDE: check behavior `exit / { clear_dispatch_output(); }`.", true))
        {
            // Step 1: execute action `clear_dispatch_output();`
            console.log("CLEAR_OUTPUT_BEFORE_THIS_AND_FOR_THIS_EVENT_DISPATCH");;
        } // end of behavior for TEST7_DECIDE
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST7_INITIAL_OR_HISTORY_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV3] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV4] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV5] = null;  // no ancestor listens to this event
    }
    
    _TEST7_DECIDE_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // TEST7_DECIDE behavior
        // uml: EV1 [trace_guard("State TEST7_DECIDE: check behavior `EV1 TransitionTo(T7__INITIAL1)`.", true)] / { trace("Transition action `` for TEST7_DECIDE to T7__INITIAL1."); } TransitionTo(T7__INITIAL1)
        if (trace_guard("State TEST7_DECIDE: check behavior `EV1 TransitionTo(T7__INITIAL1)`.", true))
        {
            // Step 1: Exit states until we reach `TEST7_INITIAL_OR_HISTORY` state (Least Common Ancestor for transition).
            this._TEST7_DECIDE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST7_DECIDE to T7__INITIAL1.");`.
            console.log("Transition action `` for TEST7_DECIDE to T7__INITIAL1.");
            
            // Step 3: Enter/move towards transition target `T7__INITIAL1`.
            this._TEST7_enter();
            this._T7__INITIAL1_enter();
            
            // T7__INITIAL1.InitialState behavior
            // uml: / { trace("Transition action `` for T7__INITIAL1.InitialState to T7__INITIAL1__PARENT."); } TransitionTo(T7__INITIAL1__PARENT)
            {
                // Step 1: Exit states until we reach `T7__INITIAL1` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__INITIAL1.InitialState to T7__INITIAL1__PARENT.");`.
                console.log("Transition action `` for T7__INITIAL1.InitialState to T7__INITIAL1__PARENT.");
                
                // Step 3: Enter/move towards transition target `T7__INITIAL1__PARENT`.
                this._T7__INITIAL1__PARENT_enter();
                
                // Finish transition by calling pseudo state transition function.
                this._T7__INITIAL1__PARENT_InitialState_transition();
                return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
            } // end of behavior for T7__INITIAL1.InitialState
        } // end of behavior for TEST7_DECIDE
    }
    
    _TEST7_DECIDE_ev2()
    {
        // No ancestor state handles `ev2` event.
        
        // TEST7_DECIDE behavior
        // uml: EV2 [trace_guard("State TEST7_DECIDE: check behavior `EV2 TransitionTo(T7__HISTORY1)`.", true)] / { trace("Transition action `` for TEST7_DECIDE to T7__HISTORY1."); } TransitionTo(T7__HISTORY1)
        if (trace_guard("State TEST7_DECIDE: check behavior `EV2 TransitionTo(T7__HISTORY1)`.", true))
        {
            // Step 1: Exit states until we reach `TEST7_INITIAL_OR_HISTORY` state (Least Common Ancestor for transition).
            this._TEST7_DECIDE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST7_DECIDE to T7__HISTORY1.");`.
            console.log("Transition action `` for TEST7_DECIDE to T7__HISTORY1.");
            
            // Step 3: Enter/move towards transition target `T7__HISTORY1`.
            this._TEST7_enter();
            this._T7__HISTORY1_enter();
            
            // T7__HISTORY1.InitialState behavior
            // uml: / { trace("Transition action `` for T7__HISTORY1.InitialState to T7__H1__ON."); } TransitionTo(T7__H1__ON)
            {
                // Step 1: Exit states until we reach `T7__HISTORY1` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__HISTORY1.InitialState to T7__H1__ON.");`.
                console.log("Transition action `` for T7__HISTORY1.InitialState to T7__H1__ON.");
                
                // Step 3: Enter/move towards transition target `T7__H1__ON`.
                this._T7__H1__ON_enter();
                
                // Finish transition by calling pseudo state transition function.
                this._T7__H1__ON_InitialState_transition();
                return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
            } // end of behavior for T7__HISTORY1.InitialState
        } // end of behavior for TEST7_DECIDE
    }
    
    _TEST7_DECIDE_ev3()
    {
        // No ancestor state handles `ev3` event.
        
        // TEST7_DECIDE behavior
        // uml: EV3 [trace_guard("State TEST7_DECIDE: check behavior `EV3 TransitionTo(T7__DEEP_HISTORY1)`.", true)] / { trace("Transition action `` for TEST7_DECIDE to T7__DEEP_HISTORY1."); } TransitionTo(T7__DEEP_HISTORY1)
        if (trace_guard("State TEST7_DECIDE: check behavior `EV3 TransitionTo(T7__DEEP_HISTORY1)`.", true))
        {
            // Step 1: Exit states until we reach `TEST7_INITIAL_OR_HISTORY` state (Least Common Ancestor for transition).
            this._TEST7_DECIDE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST7_DECIDE to T7__DEEP_HISTORY1.");`.
            console.log("Transition action `` for TEST7_DECIDE to T7__DEEP_HISTORY1.");
            
            // Step 3: Enter/move towards transition target `T7__DEEP_HISTORY1`.
            this._TEST7_enter();
            this._T7__DEEP_HISTORY1_enter();
            
            // T7__DEEP_HISTORY1.InitialState behavior
            // uml: / { trace("Transition action `` for T7__DEEP_HISTORY1.InitialState to T7__DH1__BUILD."); } TransitionTo(T7__DH1__BUILD)
            {
                // Step 1: Exit states until we reach `T7__DEEP_HISTORY1` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__DEEP_HISTORY1.InitialState to T7__DH1__BUILD.");`.
                console.log("Transition action `` for T7__DEEP_HISTORY1.InitialState to T7__DH1__BUILD.");
                
                // Step 3: Enter/move towards transition target `T7__DH1__BUILD`.
                this._T7__DH1__SANTAS_WORKSHOP_enter();
                this._T7__DH1__BUILD_enter();
                
                // Finish transition by calling pseudo state transition function.
                this._T7__DH1__BUILD_InitialState_transition();
                return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
            } // end of behavior for T7__DEEP_HISTORY1.InitialState
        } // end of behavior for TEST7_DECIDE
    }
    
    _TEST7_DECIDE_ev4()
    {
        // No ancestor state handles `ev4` event.
        
        // TEST7_DECIDE behavior
        // uml: EV4 [trace_guard("State TEST7_DECIDE: check behavior `EV4 TransitionTo(T7__DEEP_HISTORY2)`.", true)] / { trace("Transition action `` for TEST7_DECIDE to T7__DEEP_HISTORY2."); } TransitionTo(T7__DEEP_HISTORY2)
        if (trace_guard("State TEST7_DECIDE: check behavior `EV4 TransitionTo(T7__DEEP_HISTORY2)`.", true))
        {
            // Step 1: Exit states until we reach `TEST7_INITIAL_OR_HISTORY` state (Least Common Ancestor for transition).
            this._TEST7_DECIDE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST7_DECIDE to T7__DEEP_HISTORY2.");`.
            console.log("Transition action `` for TEST7_DECIDE to T7__DEEP_HISTORY2.");
            
            // Step 3: Enter/move towards transition target `T7__DEEP_HISTORY2`.
            this._TEST7_enter();
            this._T7__DEEP_HISTORY2_enter();
            
            // T7__DEEP_HISTORY2.InitialState behavior
            // uml: / { trace("Transition action `` for T7__DEEP_HISTORY2.InitialState to T7__DH2__state_0."); } TransitionTo(T7__DH2__state_0)
            {
                // Step 1: Exit states until we reach `T7__DEEP_HISTORY2` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__DEEP_HISTORY2.InitialState to T7__DH2__state_0.");`.
                console.log("Transition action `` for T7__DEEP_HISTORY2.InitialState to T7__DH2__state_0.");
                
                // Step 3: Enter/move towards transition target `T7__DH2__state_0`.
                this._T7__DH2__STATE_0_enter();
                
                // Finish transition by calling pseudo state transition function.
                this._T7__DH2__state_0_InitialState_transition();
                return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
            } // end of behavior for T7__DEEP_HISTORY2.InitialState
        } // end of behavior for TEST7_DECIDE
    }
    
    _TEST7_DECIDE_ev5()
    {
        // No ancestor state handles `ev5` event.
        
        // TEST7_DECIDE behavior
        // uml: EV5 [trace_guard("State TEST7_DECIDE: check behavior `EV5 TransitionTo(T7__DEEP_HISTORY3)`.", true)] / { trace("Transition action `` for TEST7_DECIDE to T7__DEEP_HISTORY3."); } TransitionTo(T7__DEEP_HISTORY3)
        if (trace_guard("State TEST7_DECIDE: check behavior `EV5 TransitionTo(T7__DEEP_HISTORY3)`.", true))
        {
            // Step 1: Exit states until we reach `TEST7_INITIAL_OR_HISTORY` state (Least Common Ancestor for transition).
            this._TEST7_DECIDE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST7_DECIDE to T7__DEEP_HISTORY3.");`.
            console.log("Transition action `` for TEST7_DECIDE to T7__DEEP_HISTORY3.");
            
            // Step 3: Enter/move towards transition target `T7__DEEP_HISTORY3`.
            this._TEST7_enter();
            this._T7__DEEP_HISTORY3_enter();
            
            // T7__DEEP_HISTORY3.InitialState behavior
            // uml: / { trace("Transition action `` for T7__DEEP_HISTORY3.InitialState to T7__DH3__state_0."); } TransitionTo(T7__DH3__state_0)
            {
                // Step 1: Exit states until we reach `T7__DEEP_HISTORY3` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for T7__DEEP_HISTORY3.InitialState to T7__DH3__state_0.");`.
                console.log("Transition action `` for T7__DEEP_HISTORY3.InitialState to T7__DH3__state_0.");
                
                // Step 3: Enter/move towards transition target `T7__DH3__state_0`.
                this._T7__DH3__STATE_0_enter();
                
                // Finish transition by calling pseudo state transition function.
                this._T7__DH3__state_0_InitialState_transition();
                return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
            } // end of behavior for T7__DEEP_HISTORY3.InitialState
        } // end of behavior for TEST7_DECIDE
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST8_ENTRY_CHOICE
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST8_ENTRY_CHOICE_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST8_ENTRY_CHOICE_exit;
        
        // TEST8_ENTRY_CHOICE behavior
        // uml: enter / { trace("Enter TEST8_ENTRY_CHOICE."); }
        {
            // Step 1: execute action `trace("Enter TEST8_ENTRY_CHOICE.");`
            console.log("Enter TEST8_ENTRY_CHOICE.");
        } // end of behavior for TEST8_ENTRY_CHOICE
    }
    
    _TEST8_ENTRY_CHOICE_exit()
    {
        // TEST8_ENTRY_CHOICE behavior
        // uml: exit / { trace("Exit TEST8_ENTRY_CHOICE."); }
        {
            // Step 1: execute action `trace("Exit TEST8_ENTRY_CHOICE.");`
            console.log("Exit TEST8_ENTRY_CHOICE.");
        } // end of behavior for TEST8_ENTRY_CHOICE
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._ROOT_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST8_ROOT
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST8_ROOT_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST8_ROOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV3] = this._TEST8_ROOT_ev3;
        this._currentEventHandlers[Spec2Sm.EventId.EV5] = this._TEST8_ROOT_ev5;
        
        // TEST8_ROOT behavior
        // uml: enter / { trace("Enter TEST8_ROOT."); }
        {
            // Step 1: execute action `trace("Enter TEST8_ROOT.");`
            console.log("Enter TEST8_ROOT.");
        } // end of behavior for TEST8_ROOT
        
        // TEST8_ROOT behavior
        // uml: enter [trace_guard("State TEST8_ROOT: check behavior `enter / { clear_dispatch_output(); }`.", true)] / { clear_dispatch_output(); }
        if (trace_guard("State TEST8_ROOT: check behavior `enter / { clear_dispatch_output(); }`.", true))
        {
            // Step 1: execute action `clear_dispatch_output();`
            console.log("CLEAR_OUTPUT_BEFORE_THIS_AND_FOR_THIS_EVENT_DISPATCH");;
        } // end of behavior for TEST8_ROOT
    }
    
    _TEST8_ROOT_exit()
    {
        // TEST8_ROOT behavior
        // uml: exit / { trace("Exit TEST8_ROOT."); }
        {
            // Step 1: execute action `trace("Exit TEST8_ROOT.");`
            console.log("Exit TEST8_ROOT.");
        } // end of behavior for TEST8_ROOT
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST8_ENTRY_CHOICE_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV3] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV5] = null;  // no ancestor listens to this event
    }
    
    _TEST8_ROOT_ev3()
    {
        // No ancestor state handles `ev3` event.
        
        // TEST8_ROOT behavior
        // uml: EV3 [trace_guard("State TEST8_ROOT: check behavior `EV3`.", true)]
        if (trace_guard("State TEST8_ROOT: check behavior `EV3`.", true))
        {
            // Step 1: execute action ``
            // Step 2: determine if ancestor gets to handle event next.
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
        } // end of behavior for TEST8_ROOT
    }
    
    _TEST8_ROOT_ev5()
    {
        // No ancestor state handles `ev5` event.
        
        // TEST8_ROOT behavior
        // uml: EV5 [trace_guard("State TEST8_ROOT: check behavior `EV5 / { count++; }`.", true)] / { count++; }
        if (trace_guard("State TEST8_ROOT: check behavior `EV5 / { count++; }`.", true))
        {
            // Step 1: execute action `count++;`
            this.vars.count++;
            
            // Step 2: determine if ancestor gets to handle event next.
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
        } // end of behavior for TEST8_ROOT
    }
    
    _TEST8_ROOT_EntryPoint_1__transition()
    {
        // TEST8_ROOT.EntryPoint(1) behavior
        // uml: / { trace("Transition action `` for TEST8_ROOT.EntryPoint(1) to TEST8_S1."); } TransitionTo(TEST8_S1)
        {
            // Step 1: Exit states until we reach `TEST8_ROOT` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for TEST8_ROOT.EntryPoint(1) to TEST8_S1.");`.
            console.log("Transition action `` for TEST8_ROOT.EntryPoint(1) to TEST8_S1.");
            
            // Step 3: Enter/move towards transition target `TEST8_S1`.
            this._TEST8_S1_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST8_S1;
            this._ancestorEventHandler = null;
            return;
        } // end of behavior for TEST8_ROOT.EntryPoint(1)
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST8_G
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST8_G_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST8_G_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = this._TEST8_G_ev2;
        
        // TEST8_G behavior
        // uml: enter / { trace("Enter TEST8_G."); }
        {
            // Step 1: execute action `trace("Enter TEST8_G.");`
            console.log("Enter TEST8_G.");
        } // end of behavior for TEST8_G
    }
    
    _TEST8_G_exit()
    {
        // TEST8_G behavior
        // uml: exit / { trace("Exit TEST8_G."); }
        {
            // Step 1: execute action `trace("Exit TEST8_G.");`
            console.log("Exit TEST8_G.");
        } // end of behavior for TEST8_G
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST8_ROOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = null;  // no ancestor listens to this event
    }
    
    _TEST8_G_ev2()
    {
        // No ancestor state handles `ev2` event.
        
        // TEST8_G behavior
        // uml: EV2 [trace_guard("State TEST8_G: check behavior `EV2 TransitionTo(TEST8_ROOT.EntryPoint(1))`.", true)] / { trace("Transition action `` for TEST8_G to TEST8_ROOT.EntryPoint(1)."); } TransitionTo(TEST8_ROOT.EntryPoint(1))
        if (trace_guard("State TEST8_G: check behavior `EV2 TransitionTo(TEST8_ROOT.EntryPoint(1))`.", true))
        {
            // Step 1: Exit states until we reach `TEST8_ROOT` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._TEST8_ROOT_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for TEST8_G to TEST8_ROOT.EntryPoint(1).");`.
            console.log("Transition action `` for TEST8_G to TEST8_ROOT.EntryPoint(1).");
            
            // Step 3: Enter/move towards transition target `TEST8_ROOT.EntryPoint(1)`.
            // TEST8_ROOT.EntryPoint(1) is a pseudo state and cannot have an `enter` trigger.
            
            // Finish transition by calling pseudo state transition function.
            this._TEST8_ROOT_EntryPoint_1__transition();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for TEST8_G
    }
    
    _TEST8_G_EntryPoint_1__transition()
    {
        // TEST8_G.EntryPoint(1) behavior
        // uml: [count == 1] / { trace("Transition action `` for TEST8_G.EntryPoint(1) to TEST8_G_S1."); } TransitionTo(TEST8_G_S1)
        if (this.vars.count == 1)
        {
            // Step 1: Exit states until we reach `TEST8_G` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for TEST8_G.EntryPoint(1) to TEST8_G_S1.");`.
            console.log("Transition action `` for TEST8_G.EntryPoint(1) to TEST8_G_S1.");
            
            // Step 3: Enter/move towards transition target `TEST8_G_S1`.
            this._TEST8_G_S1_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST8_G_S1;
            this._ancestorEventHandler = null;
            return;
        } // end of behavior for TEST8_G.EntryPoint(1)
        
        // TEST8_G.EntryPoint(1) behavior
        // uml: [count == 2] / { trace("Transition action `` for TEST8_G.EntryPoint(1) to TEST8_G_S2."); } TransitionTo(TEST8_G_S2)
        if (this.vars.count == 2)
        {
            // Step 1: Exit states until we reach `TEST8_G` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for TEST8_G.EntryPoint(1) to TEST8_G_S2.");`.
            console.log("Transition action `` for TEST8_G.EntryPoint(1) to TEST8_G_S2.");
            
            // Step 3: Enter/move towards transition target `TEST8_G_S2`.
            this._TEST8_G_S2_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST8_G_S2;
            this._ancestorEventHandler = null;
            return;
        } // end of behavior for TEST8_G.EntryPoint(1)
        
        // TEST8_G.EntryPoint(1) behavior
        // uml: else / { trace("Transition action `` for TEST8_G.EntryPoint(1) to TEST8_G_S3."); } TransitionTo(TEST8_G_S3)
        {
            // Step 1: Exit states until we reach `TEST8_G` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for TEST8_G.EntryPoint(1) to TEST8_G_S3.");`.
            console.log("Transition action `` for TEST8_G.EntryPoint(1) to TEST8_G_S3.");
            
            // Step 3: Enter/move towards transition target `TEST8_G_S3`.
            this._TEST8_G_S3_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST8_G_S3;
            this._ancestorEventHandler = null;
            return;
        } // end of behavior for TEST8_G.EntryPoint(1)
    }
    
    _TEST8_G_EntryPoint_3__transition()
    {
        // TEST8_G.EntryPoint(3) behavior
        // uml: / { trace("Transition action `count += 0;` for TEST8_G.EntryPoint(3) to TEST8_G.EntryPoint(1).");\ncount += 0; } TransitionTo(TEST8_G.EntryPoint(1))
        {
            // Step 1: Exit states until we reach `TEST8_G` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `count += 0;` for TEST8_G.EntryPoint(3) to TEST8_G.EntryPoint(1).");\ncount += 0;`.
            console.log("Transition action `count += 0;` for TEST8_G.EntryPoint(3) to TEST8_G.EntryPoint(1).");
            this.vars.count += 0;
            
            // Step 3: Enter/move towards transition target `TEST8_G.EntryPoint(1)`.
            // TEST8_G.EntryPoint(1) is a pseudo state and cannot have an `enter` trigger.
            
            // Finish transition by calling pseudo state transition function.
            this._TEST8_G_EntryPoint_1__transition();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for TEST8_G.EntryPoint(3)
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST8_G_S1
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST8_G_S1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST8_G_S1_exit;
        
        // TEST8_G_S1 behavior
        // uml: enter / { trace("Enter TEST8_G_S1."); }
        {
            // Step 1: execute action `trace("Enter TEST8_G_S1.");`
            console.log("Enter TEST8_G_S1.");
        } // end of behavior for TEST8_G_S1
    }
    
    _TEST8_G_S1_exit()
    {
        // TEST8_G_S1 behavior
        // uml: exit / { trace("Exit TEST8_G_S1."); }
        {
            // Step 1: execute action `trace("Exit TEST8_G_S1.");`
            console.log("Exit TEST8_G_S1.");
        } // end of behavior for TEST8_G_S1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST8_G_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST8_G_S2
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST8_G_S2_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST8_G_S2_exit;
        
        // TEST8_G_S2 behavior
        // uml: enter / { trace("Enter TEST8_G_S2."); }
        {
            // Step 1: execute action `trace("Enter TEST8_G_S2.");`
            console.log("Enter TEST8_G_S2.");
        } // end of behavior for TEST8_G_S2
    }
    
    _TEST8_G_S2_exit()
    {
        // TEST8_G_S2 behavior
        // uml: exit / { trace("Exit TEST8_G_S2."); }
        {
            // Step 1: execute action `trace("Exit TEST8_G_S2.");`
            console.log("Exit TEST8_G_S2.");
        } // end of behavior for TEST8_G_S2
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST8_G_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST8_G_S3
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST8_G_S3_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST8_G_S3_exit;
        
        // TEST8_G_S3 behavior
        // uml: enter / { trace("Enter TEST8_G_S3."); }
        {
            // Step 1: execute action `trace("Enter TEST8_G_S3.");`
            console.log("Enter TEST8_G_S3.");
        } // end of behavior for TEST8_G_S3
    }
    
    _TEST8_G_S3_exit()
    {
        // TEST8_G_S3 behavior
        // uml: exit / { trace("Exit TEST8_G_S3."); }
        {
            // Step 1: execute action `trace("Exit TEST8_G_S3.");`
            console.log("Exit TEST8_G_S3.");
        } // end of behavior for TEST8_G_S3
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST8_G_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST8_S1
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST8_S1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST8_S1_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST8_S1_ev1;
        this._currentEventHandlers[Spec2Sm.EventId.EV3] = this._TEST8_S1_ev3;
        this._currentEventHandlers[Spec2Sm.EventId.EV6] = this._TEST8_S1_ev6;
        
        // TEST8_S1 behavior
        // uml: enter / { trace("Enter TEST8_S1."); }
        {
            // Step 1: execute action `trace("Enter TEST8_S1.");`
            console.log("Enter TEST8_S1.");
        } // end of behavior for TEST8_S1
    }
    
    _TEST8_S1_exit()
    {
        // TEST8_S1 behavior
        // uml: exit / { trace("Exit TEST8_S1."); }
        {
            // Step 1: execute action `trace("Exit TEST8_S1.");`
            console.log("Exit TEST8_S1.");
        } // end of behavior for TEST8_S1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST8_ROOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV3] = this._TEST8_ROOT_ev3;  // the next ancestor that handles this event is TEST8_ROOT
        this._currentEventHandlers[Spec2Sm.EventId.EV6] = null;  // no ancestor listens to this event
    }
    
    _TEST8_S1_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // TEST8_S1 behavior
        // uml: 1. EV1 [trace_guard("State TEST8_S1: check behavior `1. EV1 TransitionTo(TEST8_G.EntryPoint(1))`.", true)] / { trace("Transition action `` for TEST8_S1 to TEST8_G.EntryPoint(1)."); } TransitionTo(TEST8_G.EntryPoint(1))
        if (trace_guard("State TEST8_S1: check behavior `1. EV1 TransitionTo(TEST8_G.EntryPoint(1))`.", true))
        {
            // Step 1: Exit states until we reach `TEST8_ROOT` state (Least Common Ancestor for transition).
            this._TEST8_S1_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST8_S1 to TEST8_G.EntryPoint(1).");`.
            console.log("Transition action `` for TEST8_S1 to TEST8_G.EntryPoint(1).");
            
            // Step 3: Enter/move towards transition target `TEST8_G.EntryPoint(1)`.
            this._TEST8_G_enter();
            // TEST8_G.EntryPoint(1) is a pseudo state and cannot have an `enter` trigger.
            
            // Finish transition by calling pseudo state transition function.
            this._TEST8_G_EntryPoint_1__transition();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for TEST8_S1
        
        // TEST8_S1 behavior
        // uml: 2. EV1 [trace_guard("State TEST8_S1: check behavior `2. EV1 / { count++; /* shouldn't run */ }`.", true)] / { count++; /* shouldn't run */ }
        if (trace_guard("State TEST8_S1: check behavior `2. EV1 / { count++; /* shouldn't run */ }`.", true))
        {
            // Step 1: execute action `count++; /* shouldn't run */`
            this.vars.count++; /* shouldn't run */
            
            // Step 2: determine if ancestor gets to handle event next.
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
        } // end of behavior for TEST8_S1
    }
    
    _TEST8_S1_ev3()
    {
        // Setup handler for next ancestor that listens to `ev3` event.
        this._ancestorEventHandler = this._TEST8_ROOT_ev3;
        
        // TEST8_S1 behavior
        // uml: EV3 [trace_guard("State TEST8_S1: check behavior `EV3 TransitionTo(TEST8_G.EntryPoint(3))`.", true)] / { trace("Transition action `` for TEST8_S1 to TEST8_G.EntryPoint(3)."); } TransitionTo(TEST8_G.EntryPoint(3))
        if (trace_guard("State TEST8_S1: check behavior `EV3 TransitionTo(TEST8_G.EntryPoint(3))`.", true))
        {
            // Step 1: Exit states until we reach `TEST8_ROOT` state (Least Common Ancestor for transition).
            this._TEST8_S1_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST8_S1 to TEST8_G.EntryPoint(3).");`.
            console.log("Transition action `` for TEST8_S1 to TEST8_G.EntryPoint(3).");
            
            // Step 3: Enter/move towards transition target `TEST8_G.EntryPoint(3)`.
            this._TEST8_G_enter();
            // TEST8_G.EntryPoint(3) is a pseudo state and cannot have an `enter` trigger.
            
            // Finish transition by calling pseudo state transition function.
            this._TEST8_G_EntryPoint_3__transition();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for TEST8_S1
    }
    
    _TEST8_S1_ev6()
    {
        // No ancestor state handles `ev6` event.
        
        // TEST8_S1 behavior
        // uml: EV6 [trace_guard("State TEST8_S1: check behavior `EV6 TransitionTo(TEST8_G.EntryPoint(3))`.", true)] / { trace("Transition action `` for TEST8_S1 to TEST8_G.EntryPoint(3)."); } TransitionTo(TEST8_G.EntryPoint(3))
        if (trace_guard("State TEST8_S1: check behavior `EV6 TransitionTo(TEST8_G.EntryPoint(3))`.", true))
        {
            // Step 1: Exit states until we reach `TEST8_ROOT` state (Least Common Ancestor for transition).
            this._TEST8_S1_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST8_S1 to TEST8_G.EntryPoint(3).");`.
            console.log("Transition action `` for TEST8_S1 to TEST8_G.EntryPoint(3).");
            
            // Step 3: Enter/move towards transition target `TEST8_G.EntryPoint(3)`.
            this._TEST8_G_enter();
            // TEST8_G.EntryPoint(3) is a pseudo state and cannot have an `enter` trigger.
            
            // Finish transition by calling pseudo state transition function.
            this._TEST8_G_EntryPoint_3__transition();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for TEST8_S1
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST9_EXIT_CHOICE
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST9_EXIT_CHOICE_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST9_EXIT_CHOICE_exit;
        
        // TEST9_EXIT_CHOICE behavior
        // uml: enter / { trace("Enter TEST9_EXIT_CHOICE."); }
        {
            // Step 1: execute action `trace("Enter TEST9_EXIT_CHOICE.");`
            console.log("Enter TEST9_EXIT_CHOICE.");
        } // end of behavior for TEST9_EXIT_CHOICE
    }
    
    _TEST9_EXIT_CHOICE_exit()
    {
        // TEST9_EXIT_CHOICE behavior
        // uml: exit / { trace("Exit TEST9_EXIT_CHOICE."); }
        {
            // Step 1: execute action `trace("Exit TEST9_EXIT_CHOICE.");`
            console.log("Exit TEST9_EXIT_CHOICE.");
        } // end of behavior for TEST9_EXIT_CHOICE
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._ROOT_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST9_DECIDE
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST9_DECIDE_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST9_DECIDE_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST9_DECIDE_ev1;
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = this._TEST9_DECIDE_ev2;
        this._currentEventHandlers[Spec2Sm.EventId.EV3] = this._TEST9_DECIDE_ev3;
        
        // TEST9_DECIDE behavior
        // uml: enter / { trace("Enter TEST9_DECIDE."); }
        {
            // Step 1: execute action `trace("Enter TEST9_DECIDE.");`
            console.log("Enter TEST9_DECIDE.");
        } // end of behavior for TEST9_DECIDE
    }
    
    _TEST9_DECIDE_exit()
    {
        // TEST9_DECIDE behavior
        // uml: exit / { trace("Exit TEST9_DECIDE."); }
        {
            // Step 1: execute action `trace("Exit TEST9_DECIDE.");`
            console.log("Exit TEST9_DECIDE.");
        } // end of behavior for TEST9_DECIDE
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST9_EXIT_CHOICE_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV2] = null;  // no ancestor listens to this event
        this._currentEventHandlers[Spec2Sm.EventId.EV3] = null;  // no ancestor listens to this event
    }
    
    _TEST9_DECIDE_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // TEST9_DECIDE behavior
        // uml: EV1 [trace_guard("State TEST9_DECIDE: check behavior `EV1 TransitionTo(TEST9_ROOT)`.", true)] / { trace("Transition action `` for TEST9_DECIDE to TEST9_ROOT."); } TransitionTo(TEST9_ROOT)
        if (trace_guard("State TEST9_DECIDE: check behavior `EV1 TransitionTo(TEST9_ROOT)`.", true))
        {
            // Step 1: Exit states until we reach `TEST9_EXIT_CHOICE` state (Least Common Ancestor for transition).
            this._TEST9_DECIDE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST9_DECIDE to TEST9_ROOT.");`.
            console.log("Transition action `` for TEST9_DECIDE to TEST9_ROOT.");
            
            // Step 3: Enter/move towards transition target `TEST9_ROOT`.
            this._TEST9_ROOT_enter();
            
            // TEST9_ROOT.InitialState behavior
            // uml: / { trace("Transition action `` for TEST9_ROOT.InitialState to TEST9_S1."); } TransitionTo(TEST9_S1)
            {
                // Step 1: Exit states until we reach `TEST9_ROOT` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `` for TEST9_ROOT.InitialState to TEST9_S1.");`.
                console.log("Transition action `` for TEST9_ROOT.InitialState to TEST9_S1.");
                
                // Step 3: Enter/move towards transition target `TEST9_S1`.
                this._TEST9_S1_enter();
                
                // TEST9_S1.InitialState behavior
                // uml: / { trace("Transition action `` for TEST9_S1.InitialState to TEST9_S1_1."); } TransitionTo(TEST9_S1_1)
                {
                    // Step 1: Exit states until we reach `TEST9_S1` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                    
                    // Step 2: Transition action: `trace("Transition action `` for TEST9_S1.InitialState to TEST9_S1_1.");`.
                    console.log("Transition action `` for TEST9_S1.InitialState to TEST9_S1_1.");
                    
                    // Step 3: Enter/move towards transition target `TEST9_S1_1`.
                    this._TEST9_S1_1_enter();
                    
                    // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                    this.stateId = Spec2Sm.StateId.TEST9_S1_1;
                    // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                    return;
                } // end of behavior for TEST9_S1.InitialState
            } // end of behavior for TEST9_ROOT.InitialState
        } // end of behavior for TEST9_DECIDE
    }
    
    _TEST9_DECIDE_ev2()
    {
        // No ancestor state handles `ev2` event.
        
        // TEST9_DECIDE behavior
        // uml: EV2 [trace_guard("State TEST9_DECIDE: check behavior `EV2 TransitionTo(TEST9A_ROOT)`.", true)] / { trace("Transition action `` for TEST9_DECIDE to TEST9A_ROOT."); } TransitionTo(TEST9A_ROOT)
        if (trace_guard("State TEST9_DECIDE: check behavior `EV2 TransitionTo(TEST9A_ROOT)`.", true))
        {
            // Step 1: Exit states until we reach `TEST9_EXIT_CHOICE` state (Least Common Ancestor for transition).
            this._TEST9_DECIDE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST9_DECIDE to TEST9A_ROOT.");`.
            console.log("Transition action `` for TEST9_DECIDE to TEST9A_ROOT.");
            
            // Step 3: Enter/move towards transition target `TEST9A_ROOT`.
            this._TEST9A_ROOT_enter();
            
            // TEST9A_ROOT.InitialState behavior
            // uml: / { trace("Transition action `count = 0;` for TEST9A_ROOT.InitialState to TEST9A_S1.");\ncount = 0; } TransitionTo(TEST9A_S1)
            {
                // Step 1: Exit states until we reach `TEST9A_ROOT` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: `trace("Transition action `count = 0;` for TEST9A_ROOT.InitialState to TEST9A_S1.");\ncount = 0;`.
                console.log("Transition action `count = 0;` for TEST9A_ROOT.InitialState to TEST9A_S1.");
                this.vars.count = 0;
                
                // Step 3: Enter/move towards transition target `TEST9A_S1`.
                this._TEST9A_S1_enter();
                
                // Finish transition by calling pseudo state transition function.
                this._TEST9A_S1_InitialState_transition();
                return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
            } // end of behavior for TEST9A_ROOT.InitialState
        } // end of behavior for TEST9_DECIDE
    }
    
    _TEST9_DECIDE_ev3()
    {
        // No ancestor state handles `ev3` event.
        
        // TEST9_DECIDE behavior
        // uml: EV3 [trace_guard("State TEST9_DECIDE: check behavior `EV3 TransitionTo(TEST9B_ROOT)`.", true)] / { trace("Transition action `` for TEST9_DECIDE to TEST9B_ROOT."); } TransitionTo(TEST9B_ROOT)
        if (trace_guard("State TEST9_DECIDE: check behavior `EV3 TransitionTo(TEST9B_ROOT)`.", true))
        {
            // Step 1: Exit states until we reach `TEST9_EXIT_CHOICE` state (Least Common Ancestor for transition).
            this._TEST9_DECIDE_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST9_DECIDE to TEST9B_ROOT.");`.
            console.log("Transition action `` for TEST9_DECIDE to TEST9B_ROOT.");
            
            // Step 3: Enter/move towards transition target `TEST9B_ROOT`.
            this._TEST9B_ROOT_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST9B_ROOT;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for TEST9_DECIDE
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST9_ROOT
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST9_ROOT_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST9_ROOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV5] = this._TEST9_ROOT_ev5;
        
        // TEST9_ROOT behavior
        // uml: enter / { trace("Enter TEST9_ROOT."); }
        {
            // Step 1: execute action `trace("Enter TEST9_ROOT.");`
            console.log("Enter TEST9_ROOT.");
        } // end of behavior for TEST9_ROOT
    }
    
    _TEST9_ROOT_exit()
    {
        // TEST9_ROOT behavior
        // uml: exit / { trace("Exit TEST9_ROOT."); }
        {
            // Step 1: execute action `trace("Exit TEST9_ROOT.");`
            console.log("Exit TEST9_ROOT.");
        } // end of behavior for TEST9_ROOT
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST9_EXIT_CHOICE_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV5] = null;  // no ancestor listens to this event
    }
    
    _TEST9_ROOT_ev5()
    {
        // No ancestor state handles `ev5` event.
        
        // TEST9_ROOT behavior
        // uml: EV5 [trace_guard("State TEST9_ROOT: check behavior `EV5 / { count++; }`.", true)] / { count++; }
        if (trace_guard("State TEST9_ROOT: check behavior `EV5 / { count++; }`.", true))
        {
            // Step 1: execute action `count++;`
            this.vars.count++;
            
            // Step 2: determine if ancestor gets to handle event next.
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
        } // end of behavior for TEST9_ROOT
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST9_G_S1
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST9_G_S1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST9_G_S1_exit;
        
        // TEST9_G_S1 behavior
        // uml: enter / { trace("Enter TEST9_G_S1."); }
        {
            // Step 1: execute action `trace("Enter TEST9_G_S1.");`
            console.log("Enter TEST9_G_S1.");
        } // end of behavior for TEST9_G_S1
    }
    
    _TEST9_G_S1_exit()
    {
        // TEST9_G_S1 behavior
        // uml: exit / { trace("Exit TEST9_G_S1."); }
        {
            // Step 1: execute action `trace("Exit TEST9_G_S1.");`
            console.log("Exit TEST9_G_S1.");
        } // end of behavior for TEST9_G_S1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST9_ROOT_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST9_G_S2
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST9_G_S2_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST9_G_S2_exit;
        
        // TEST9_G_S2 behavior
        // uml: enter / { trace("Enter TEST9_G_S2."); }
        {
            // Step 1: execute action `trace("Enter TEST9_G_S2.");`
            console.log("Enter TEST9_G_S2.");
        } // end of behavior for TEST9_G_S2
    }
    
    _TEST9_G_S2_exit()
    {
        // TEST9_G_S2 behavior
        // uml: exit / { trace("Exit TEST9_G_S2."); }
        {
            // Step 1: execute action `trace("Exit TEST9_G_S2.");`
            console.log("Exit TEST9_G_S2.");
        } // end of behavior for TEST9_G_S2
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST9_ROOT_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST9_G_S3
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST9_G_S3_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST9_G_S3_exit;
        
        // TEST9_G_S3 behavior
        // uml: enter / { trace("Enter TEST9_G_S3."); }
        {
            // Step 1: execute action `trace("Enter TEST9_G_S3.");`
            console.log("Enter TEST9_G_S3.");
        } // end of behavior for TEST9_G_S3
    }
    
    _TEST9_G_S3_exit()
    {
        // TEST9_G_S3 behavior
        // uml: exit / { trace("Exit TEST9_G_S3."); }
        {
            // Step 1: execute action `trace("Exit TEST9_G_S3.");`
            console.log("Exit TEST9_G_S3.");
        } // end of behavior for TEST9_G_S3
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST9_ROOT_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST9_G_S4
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST9_G_S4_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST9_G_S4_exit;
        
        // TEST9_G_S4 behavior
        // uml: enter / { trace("Enter TEST9_G_S4."); }
        {
            // Step 1: execute action `trace("Enter TEST9_G_S4.");`
            console.log("Enter TEST9_G_S4.");
        } // end of behavior for TEST9_G_S4
    }
    
    _TEST9_G_S4_exit()
    {
        // TEST9_G_S4 behavior
        // uml: exit / { trace("Exit TEST9_G_S4."); }
        {
            // Step 1: execute action `trace("Exit TEST9_G_S4.");`
            console.log("Exit TEST9_G_S4.");
        } // end of behavior for TEST9_G_S4
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST9_ROOT_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST9_S1
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST9_S1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST9_S1_exit;
        
        // TEST9_S1 behavior
        // uml: enter / { trace("Enter TEST9_S1."); }
        {
            // Step 1: execute action `trace("Enter TEST9_S1.");`
            console.log("Enter TEST9_S1.");
        } // end of behavior for TEST9_S1
    }
    
    _TEST9_S1_exit()
    {
        // TEST9_S1 behavior
        // uml: exit / { trace("Exit TEST9_S1."); }
        {
            // Step 1: execute action `trace("Exit TEST9_S1.");`
            console.log("Exit TEST9_S1.");
        } // end of behavior for TEST9_S1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST9_ROOT_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST9_S1_1
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST9_S1_1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST9_S1_1_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST9_S1_1_ev1;
        
        // TEST9_S1_1 behavior
        // uml: enter / { trace("Enter TEST9_S1_1."); }
        {
            // Step 1: execute action `trace("Enter TEST9_S1_1.");`
            console.log("Enter TEST9_S1_1.");
        } // end of behavior for TEST9_S1_1
        
        // TEST9_S1_1 behavior
        // uml: enter [trace_guard("State TEST9_S1_1: check behavior `enter / { clear_output(); }`.", true)] / { clear_output(); }
        if (trace_guard("State TEST9_S1_1: check behavior `enter / { clear_output(); }`.", true))
        {
            // Step 1: execute action `clear_output();`
            console.log("IGNORE_OUTPUT_BEFORE_THIS");;
        } // end of behavior for TEST9_S1_1
    }
    
    _TEST9_S1_1_exit()
    {
        // TEST9_S1_1 behavior
        // uml: exit / { trace("Exit TEST9_S1_1."); }
        {
            // Step 1: execute action `trace("Exit TEST9_S1_1.");`
            console.log("Exit TEST9_S1_1.");
        } // end of behavior for TEST9_S1_1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST9_S1_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _TEST9_S1_1_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // TEST9_S1_1 behavior
        // uml: EV1 [trace_guard("State TEST9_S1_1: check behavior `EV1 TransitionTo(TEST9_S1.ExitPoint(1))`.", true)] / { trace("Transition action `` for TEST9_S1_1 to TEST9_S1.ExitPoint(1)."); } TransitionTo(TEST9_S1.ExitPoint(1))
        if (trace_guard("State TEST9_S1_1: check behavior `EV1 TransitionTo(TEST9_S1.ExitPoint(1))`.", true))
        {
            // Step 1: Exit states until we reach `TEST9_S1` state (Least Common Ancestor for transition).
            this._TEST9_S1_1_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST9_S1_1 to TEST9_S1.ExitPoint(1).");`.
            console.log("Transition action `` for TEST9_S1_1 to TEST9_S1.ExitPoint(1).");
            
            // Step 3: Enter/move towards transition target `TEST9_S1.ExitPoint(1)`.
            // TEST9_S1.ExitPoint(1) is a pseudo state and cannot have an `enter` trigger.
            
            // TEST9_S1.ExitPoint(1) behavior
            // uml: [count == 4] / { trace("Transition action `` for TEST9_S1.ExitPoint(1) to TEST9_G_S4."); } TransitionTo(TEST9_G_S4)
            if (this.vars.count == 4)
            {
                // Step 1: Exit states until we reach `TEST9_ROOT` state (Least Common Ancestor for transition).
                this._TEST9_S1_exit();
                
                // Step 2: Transition action: `trace("Transition action `` for TEST9_S1.ExitPoint(1) to TEST9_G_S4.");`.
                console.log("Transition action `` for TEST9_S1.ExitPoint(1) to TEST9_G_S4.");
                
                // Step 3: Enter/move towards transition target `TEST9_G_S4`.
                this._TEST9_G_S4_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.TEST9_G_S4;
                // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                return;
            } // end of behavior for TEST9_S1.ExitPoint(1)
            
            // TEST9_S1.ExitPoint(1) behavior
            // uml: [count == 1] / { trace("Transition action `` for TEST9_S1.ExitPoint(1) to TEST9_G_S1."); } TransitionTo(TEST9_G_S1)
            if (this.vars.count == 1)
            {
                // Step 1: Exit states until we reach `TEST9_ROOT` state (Least Common Ancestor for transition).
                this._TEST9_S1_exit();
                
                // Step 2: Transition action: `trace("Transition action `` for TEST9_S1.ExitPoint(1) to TEST9_G_S1.");`.
                console.log("Transition action `` for TEST9_S1.ExitPoint(1) to TEST9_G_S1.");
                
                // Step 3: Enter/move towards transition target `TEST9_G_S1`.
                this._TEST9_G_S1_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.TEST9_G_S1;
                // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                return;
            } // end of behavior for TEST9_S1.ExitPoint(1)
            
            // TEST9_S1.ExitPoint(1) behavior
            // uml: [count == 2] / { trace("Transition action `` for TEST9_S1.ExitPoint(1) to TEST9_G_S2."); } TransitionTo(TEST9_G_S2)
            if (this.vars.count == 2)
            {
                // Step 1: Exit states until we reach `TEST9_ROOT` state (Least Common Ancestor for transition).
                this._TEST9_S1_exit();
                
                // Step 2: Transition action: `trace("Transition action `` for TEST9_S1.ExitPoint(1) to TEST9_G_S2.");`.
                console.log("Transition action `` for TEST9_S1.ExitPoint(1) to TEST9_G_S2.");
                
                // Step 3: Enter/move towards transition target `TEST9_G_S2`.
                this._TEST9_G_S2_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.TEST9_G_S2;
                // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                return;
            } // end of behavior for TEST9_S1.ExitPoint(1)
            
            // TEST9_S1.ExitPoint(1) behavior
            // uml: else / { trace("Transition action `` for TEST9_S1.ExitPoint(1) to TEST9_G_S3."); } TransitionTo(TEST9_G_S3)
            {
                // Step 1: Exit states until we reach `TEST9_ROOT` state (Least Common Ancestor for transition).
                this._TEST9_S1_exit();
                
                // Step 2: Transition action: `trace("Transition action `` for TEST9_S1.ExitPoint(1) to TEST9_G_S3.");`.
                console.log("Transition action `` for TEST9_S1.ExitPoint(1) to TEST9_G_S3.");
                
                // Step 3: Enter/move towards transition target `TEST9_G_S3`.
                this._TEST9_G_S3_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.TEST9_G_S3;
                // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                return;
            } // end of behavior for TEST9_S1.ExitPoint(1)
        } // end of behavior for TEST9_S1_1
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST9A_ROOT
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST9A_ROOT_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST9A_ROOT_exit;
        
        // TEST9A_ROOT behavior
        // uml: enter / { trace("Enter TEST9A_ROOT."); }
        {
            // Step 1: execute action `trace("Enter TEST9A_ROOT.");`
            console.log("Enter TEST9A_ROOT.");
        } // end of behavior for TEST9A_ROOT
    }
    
    _TEST9A_ROOT_exit()
    {
        // TEST9A_ROOT behavior
        // uml: exit / { trace("Exit TEST9A_ROOT."); }
        {
            // Step 1: execute action `trace("Exit TEST9A_ROOT.");`
            console.log("Exit TEST9A_ROOT.");
        } // end of behavior for TEST9A_ROOT
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST9_EXIT_CHOICE_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST9A_S1
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST9A_S1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST9A_S1_exit;
        
        // TEST9A_S1 behavior
        // uml: enter / { trace("Enter TEST9A_S1."); }
        {
            // Step 1: execute action `trace("Enter TEST9A_S1.");`
            console.log("Enter TEST9A_S1.");
        } // end of behavior for TEST9A_S1
    }
    
    _TEST9A_S1_exit()
    {
        // TEST9A_S1 behavior
        // uml: exit / { trace("Exit TEST9A_S1."); }
        {
            // Step 1: execute action `trace("Exit TEST9A_S1.");`
            console.log("Exit TEST9A_S1.");
        } // end of behavior for TEST9A_S1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST9A_ROOT_exit;
    }
    
    _TEST9A_S1_InitialState_transition()
    {
        // TEST9A_S1.InitialState behavior
        // uml: / { trace("Transition action `` for TEST9A_S1.InitialState to TEST9A_S1_1."); } TransitionTo(TEST9A_S1_1)
        {
            // Step 1: Exit states until we reach `TEST9A_S1` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: `trace("Transition action `` for TEST9A_S1.InitialState to TEST9A_S1_1.");`.
            console.log("Transition action `` for TEST9A_S1.InitialState to TEST9A_S1_1.");
            
            // Step 3: Enter/move towards transition target `TEST9A_S1_1`.
            this._TEST9A_S1_1_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST9A_S1_1;
            this._ancestorEventHandler = null;
            return;
        } // end of behavior for TEST9A_S1.InitialState
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST9A_S1_1
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST9A_S1_1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST9A_S1_1_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST9A_S1_1_ev1;
        
        // TEST9A_S1_1 behavior
        // uml: enter / { trace("Enter TEST9A_S1_1."); }
        {
            // Step 1: execute action `trace("Enter TEST9A_S1_1.");`
            console.log("Enter TEST9A_S1_1.");
        } // end of behavior for TEST9A_S1_1
        
        // TEST9A_S1_1 behavior
        // uml: enter [trace_guard("State TEST9A_S1_1: check behavior `enter [count == 0] / { clear_output(); }`.", count == 0)] / { clear_output(); }
        if (trace_guard("State TEST9A_S1_1: check behavior `enter [count == 0] / { clear_output(); }`.", this.vars.count == 0))
        {
            // Step 1: execute action `clear_output();`
            console.log("IGNORE_OUTPUT_BEFORE_THIS");;
        } // end of behavior for TEST9A_S1_1
    }
    
    _TEST9A_S1_1_exit()
    {
        // TEST9A_S1_1 behavior
        // uml: exit / { trace("Exit TEST9A_S1_1."); }
        {
            // Step 1: execute action `trace("Exit TEST9A_S1_1.");`
            console.log("Exit TEST9A_S1_1.");
        } // end of behavior for TEST9A_S1_1
        
        // TEST9A_S1_1 behavior
        // uml: exit [trace_guard("State TEST9A_S1_1: check behavior `exit / { count = 100; }`.", true)] / { count = 100; }
        if (trace_guard("State TEST9A_S1_1: check behavior `exit / { count = 100; }`.", true))
        {
            // Step 1: execute action `count = 100;`
            this.vars.count = 100;
        } // end of behavior for TEST9A_S1_1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST9A_S1_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _TEST9A_S1_1_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // TEST9A_S1_1 behavior
        // uml: EV1 [trace_guard("State TEST9A_S1_1: check behavior `EV1 TransitionTo(TEST9A_S1.ExitPoint(1))`.", true)] / { trace("Transition action `` for TEST9A_S1_1 to TEST9A_S1.ExitPoint(1)."); } TransitionTo(TEST9A_S1.ExitPoint(1))
        if (trace_guard("State TEST9A_S1_1: check behavior `EV1 TransitionTo(TEST9A_S1.ExitPoint(1))`.", true))
        {
            // Step 1: Exit states until we reach `TEST9A_S1` state (Least Common Ancestor for transition).
            this._TEST9A_S1_1_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST9A_S1_1 to TEST9A_S1.ExitPoint(1).");`.
            console.log("Transition action `` for TEST9A_S1_1 to TEST9A_S1.ExitPoint(1).");
            
            // Step 3: Enter/move towards transition target `TEST9A_S1.ExitPoint(1)`.
            // TEST9A_S1.ExitPoint(1) is a pseudo state and cannot have an `enter` trigger.
            
            // TEST9A_S1.ExitPoint(1) behavior
            // uml: [true] / { trace("Transition action `count++;` for TEST9A_S1.ExitPoint(1) to TEST9A_S1.");\ncount++; } TransitionTo(TEST9A_S1)
            if (true)
            {
                // Step 1: Exit states until we reach `TEST9A_S1` state (Least Common Ancestor for transition).
                this._TEST9A_S1_exit();
                
                // Step 2: Transition action: `trace("Transition action `count++;` for TEST9A_S1.ExitPoint(1) to TEST9A_S1.");\ncount++;`.
                console.log("Transition action `count++;` for TEST9A_S1.ExitPoint(1) to TEST9A_S1.");
                this.vars.count++;
                
                // Step 3: Enter/move towards transition target `TEST9A_S1`.
                // Already in target. No entering required.
                // Finish transition by calling pseudo state transition function.
                this._TEST9A_S1_InitialState_transition();
                return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
            } // end of behavior for TEST9A_S1.ExitPoint(1)
        } // end of behavior for TEST9A_S1_1
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST9B_ROOT
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST9B_ROOT_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST9B_ROOT_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST9B_ROOT_ev1;
        
        // TEST9B_ROOT behavior
        // uml: enter / { trace("Enter TEST9B_ROOT."); }
        {
            // Step 1: execute action `trace("Enter TEST9B_ROOT.");`
            console.log("Enter TEST9B_ROOT.");
        } // end of behavior for TEST9B_ROOT
        
        // TEST9B_ROOT behavior
        // uml: enter [trace_guard("State TEST9B_ROOT: check behavior `enter / { clear_output(); }`.", true)] / { clear_output(); }
        if (trace_guard("State TEST9B_ROOT: check behavior `enter / { clear_output(); }`.", true))
        {
            // Step 1: execute action `clear_output();`
            console.log("IGNORE_OUTPUT_BEFORE_THIS");;
        } // end of behavior for TEST9B_ROOT
    }
    
    _TEST9B_ROOT_exit()
    {
        // TEST9B_ROOT behavior
        // uml: exit / { trace("Exit TEST9B_ROOT."); }
        {
            // Step 1: execute action `trace("Exit TEST9B_ROOT.");`
            console.log("Exit TEST9B_ROOT.");
        } // end of behavior for TEST9B_ROOT
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST9_EXIT_CHOICE_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = null;  // no ancestor listens to this event
    }
    
    _TEST9B_ROOT_ev1()
    {
        // No ancestor state handles `ev1` event.
        
        // TEST9B_ROOT behavior
        // uml: EV1 [trace_guard("State TEST9B_ROOT: check behavior `EV1 TransitionTo(TEST9B_ROOT__A4)`.", true)] / { trace("Transition action `` for TEST9B_ROOT to TEST9B_ROOT__A4."); } TransitionTo(TEST9B_ROOT__A4)
        if (trace_guard("State TEST9B_ROOT: check behavior `EV1 TransitionTo(TEST9B_ROOT__A4)`.", true))
        {
            // Step 1: Exit states until we reach `TEST9B_ROOT` state (Least Common Ancestor for transition).
            this._ExitUpToStateHandler(this._TEST9B_ROOT_exit);
            
            // Step 2: Transition action: `trace("Transition action `` for TEST9B_ROOT to TEST9B_ROOT__A4.");`.
            console.log("Transition action `` for TEST9B_ROOT to TEST9B_ROOT__A4.");
            
            // Step 3: Enter/move towards transition target `TEST9B_ROOT__A4`.
            this._TEST9B_ROOT__A1_enter();
            this._TEST9B_ROOT__A2_enter();
            this._TEST9B_ROOT__A3_enter();
            this._TEST9B_ROOT__A4_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = Spec2Sm.StateId.TEST9B_ROOT__A4;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for TEST9B_ROOT
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST9B_ROOT__A1
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST9B_ROOT__A1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST9B_ROOT__A1_exit;
        
        // TEST9B_ROOT__A1 behavior
        // uml: enter / { trace("Enter TEST9B_ROOT__A1."); }
        {
            // Step 1: execute action `trace("Enter TEST9B_ROOT__A1.");`
            console.log("Enter TEST9B_ROOT__A1.");
        } // end of behavior for TEST9B_ROOT__A1
    }
    
    _TEST9B_ROOT__A1_exit()
    {
        // TEST9B_ROOT__A1 behavior
        // uml: exit / { trace("Exit TEST9B_ROOT__A1."); }
        {
            // Step 1: execute action `trace("Exit TEST9B_ROOT__A1.");`
            console.log("Exit TEST9B_ROOT__A1.");
        } // end of behavior for TEST9B_ROOT__A1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST9B_ROOT_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST9B_ROOT__A2
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST9B_ROOT__A2_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST9B_ROOT__A2_exit;
        
        // TEST9B_ROOT__A2 behavior
        // uml: enter / { trace("Enter TEST9B_ROOT__A2."); }
        {
            // Step 1: execute action `trace("Enter TEST9B_ROOT__A2.");`
            console.log("Enter TEST9B_ROOT__A2.");
        } // end of behavior for TEST9B_ROOT__A2
    }
    
    _TEST9B_ROOT__A2_exit()
    {
        // TEST9B_ROOT__A2 behavior
        // uml: exit / { trace("Exit TEST9B_ROOT__A2."); }
        {
            // Step 1: execute action `trace("Exit TEST9B_ROOT__A2.");`
            console.log("Exit TEST9B_ROOT__A2.");
        } // end of behavior for TEST9B_ROOT__A2
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST9B_ROOT__A1_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST9B_ROOT__A3
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST9B_ROOT__A3_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST9B_ROOT__A3_exit;
        
        // TEST9B_ROOT__A3 behavior
        // uml: enter / { trace("Enter TEST9B_ROOT__A3."); }
        {
            // Step 1: execute action `trace("Enter TEST9B_ROOT__A3.");`
            console.log("Enter TEST9B_ROOT__A3.");
        } // end of behavior for TEST9B_ROOT__A3
    }
    
    _TEST9B_ROOT__A3_exit()
    {
        // TEST9B_ROOT__A3 behavior
        // uml: exit / { trace("Exit TEST9B_ROOT__A3."); }
        {
            // Step 1: execute action `trace("Exit TEST9B_ROOT__A3.");`
            console.log("Exit TEST9B_ROOT__A3.");
        } // end of behavior for TEST9B_ROOT__A3
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST9B_ROOT__A2_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST9B_ROOT__A4
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST9B_ROOT__A4_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST9B_ROOT__A4_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST9B_ROOT__A4_ev1;
        
        // TEST9B_ROOT__A4 behavior
        // uml: enter / { trace("Enter TEST9B_ROOT__A4."); }
        {
            // Step 1: execute action `trace("Enter TEST9B_ROOT__A4.");`
            console.log("Enter TEST9B_ROOT__A4.");
        } // end of behavior for TEST9B_ROOT__A4
    }
    
    _TEST9B_ROOT__A4_exit()
    {
        // TEST9B_ROOT__A4 behavior
        // uml: exit / { trace("Exit TEST9B_ROOT__A4."); }
        {
            // Step 1: execute action `trace("Exit TEST9B_ROOT__A4.");`
            console.log("Exit TEST9B_ROOT__A4.");
        } // end of behavior for TEST9B_ROOT__A4
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST9B_ROOT__A3_exit;
        this._currentEventHandlers[Spec2Sm.EventId.EV1] = this._TEST9B_ROOT_ev1;  // the next ancestor that handles this event is TEST9B_ROOT
    }
    
    _TEST9B_ROOT__A4_ev1()
    {
        // Setup handler for next ancestor that listens to `ev1` event.
        this._ancestorEventHandler = this._TEST9B_ROOT_ev1;
        
        // TEST9B_ROOT__A4 behavior
        // uml: EV1 [trace_guard("State TEST9B_ROOT__A4: check behavior `EV1 TransitionTo(TEST9B_ROOT__A3.ExitPoint(1))`.", true)] / { trace("Transition action `` for TEST9B_ROOT__A4 to TEST9B_ROOT__A3.ExitPoint(1)."); } TransitionTo(TEST9B_ROOT__A3.ExitPoint(1))
        if (trace_guard("State TEST9B_ROOT__A4: check behavior `EV1 TransitionTo(TEST9B_ROOT__A3.ExitPoint(1))`.", true))
        {
            // Step 1: Exit states until we reach `TEST9B_ROOT__A3` state (Least Common Ancestor for transition).
            this._TEST9B_ROOT__A4_exit();
            
            // Step 2: Transition action: `trace("Transition action `` for TEST9B_ROOT__A4 to TEST9B_ROOT__A3.ExitPoint(1).");`.
            console.log("Transition action `` for TEST9B_ROOT__A4 to TEST9B_ROOT__A3.ExitPoint(1).");
            
            // Step 3: Enter/move towards transition target `TEST9B_ROOT__A3.ExitPoint(1)`.
            // TEST9B_ROOT__A3.ExitPoint(1) is a pseudo state and cannot have an `enter` trigger.
            
            // TEST9B_ROOT__A3.ExitPoint(1) behavior
            // uml: / { trace("Transition action `` for TEST9B_ROOT__A3.ExitPoint(1) to TEST9B_ROOT__B4."); } TransitionTo(TEST9B_ROOT__B4)
            {
                // Step 1: Exit states until we reach `TEST9B_ROOT` state (Least Common Ancestor for transition).
                this._ExitUpToStateHandler(this._TEST9B_ROOT_exit);
                
                // Step 2: Transition action: `trace("Transition action `` for TEST9B_ROOT__A3.ExitPoint(1) to TEST9B_ROOT__B4.");`.
                console.log("Transition action `` for TEST9B_ROOT__A3.ExitPoint(1) to TEST9B_ROOT__B4.");
                
                // Step 3: Enter/move towards transition target `TEST9B_ROOT__B4`.
                this._TEST9B_ROOT__B1_enter();
                this._TEST9B_ROOT__B2_enter();
                this._TEST9B_ROOT__B3_enter();
                this._TEST9B_ROOT__B4_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                this.stateId = Spec2Sm.StateId.TEST9B_ROOT__B4;
                this._ancestorEventHandler = null;
                return;
            } // end of behavior for TEST9B_ROOT__A3.ExitPoint(1)
        } // end of behavior for TEST9B_ROOT__A4
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST9B_ROOT__B1
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST9B_ROOT__B1_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST9B_ROOT__B1_exit;
        
        // TEST9B_ROOT__B1 behavior
        // uml: enter / { trace("Enter TEST9B_ROOT__B1."); }
        {
            // Step 1: execute action `trace("Enter TEST9B_ROOT__B1.");`
            console.log("Enter TEST9B_ROOT__B1.");
        } // end of behavior for TEST9B_ROOT__B1
    }
    
    _TEST9B_ROOT__B1_exit()
    {
        // TEST9B_ROOT__B1 behavior
        // uml: exit / { trace("Exit TEST9B_ROOT__B1."); }
        {
            // Step 1: execute action `trace("Exit TEST9B_ROOT__B1.");`
            console.log("Exit TEST9B_ROOT__B1.");
        } // end of behavior for TEST9B_ROOT__B1
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST9B_ROOT_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST9B_ROOT__B2
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST9B_ROOT__B2_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST9B_ROOT__B2_exit;
        
        // TEST9B_ROOT__B2 behavior
        // uml: enter / { trace("Enter TEST9B_ROOT__B2."); }
        {
            // Step 1: execute action `trace("Enter TEST9B_ROOT__B2.");`
            console.log("Enter TEST9B_ROOT__B2.");
        } // end of behavior for TEST9B_ROOT__B2
    }
    
    _TEST9B_ROOT__B2_exit()
    {
        // TEST9B_ROOT__B2 behavior
        // uml: exit / { trace("Exit TEST9B_ROOT__B2."); }
        {
            // Step 1: execute action `trace("Exit TEST9B_ROOT__B2.");`
            console.log("Exit TEST9B_ROOT__B2.");
        } // end of behavior for TEST9B_ROOT__B2
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST9B_ROOT__B1_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST9B_ROOT__B3
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST9B_ROOT__B3_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST9B_ROOT__B3_exit;
        
        // TEST9B_ROOT__B3 behavior
        // uml: enter / { trace("Enter TEST9B_ROOT__B3."); }
        {
            // Step 1: execute action `trace("Enter TEST9B_ROOT__B3.");`
            console.log("Enter TEST9B_ROOT__B3.");
        } // end of behavior for TEST9B_ROOT__B3
    }
    
    _TEST9B_ROOT__B3_exit()
    {
        // TEST9B_ROOT__B3 behavior
        // uml: exit / { trace("Exit TEST9B_ROOT__B3."); }
        {
            // Step 1: execute action `trace("Exit TEST9B_ROOT__B3.");`
            console.log("Exit TEST9B_ROOT__B3.");
        } // end of behavior for TEST9B_ROOT__B3
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST9B_ROOT__B2_exit;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state TEST9B_ROOT__B4
    ////////////////////////////////////////////////////////////////////////////////
    
    _TEST9B_ROOT__B4_enter()
    {
        // setup trigger/event handlers
        this._currentStateExitHandler = this._TEST9B_ROOT__B4_exit;
        
        // TEST9B_ROOT__B4 behavior
        // uml: enter / { trace("Enter TEST9B_ROOT__B4."); }
        {
            // Step 1: execute action `trace("Enter TEST9B_ROOT__B4.");`
            console.log("Enter TEST9B_ROOT__B4.");
        } // end of behavior for TEST9B_ROOT__B4
    }
    
    _TEST9B_ROOT__B4_exit()
    {
        // TEST9B_ROOT__B4 behavior
        // uml: exit / { trace("Exit TEST9B_ROOT__B4."); }
        {
            // Step 1: execute action `trace("Exit TEST9B_ROOT__B4.");`
            console.log("Exit TEST9B_ROOT__B4.");
        } // end of behavior for TEST9B_ROOT__B4
        
        // adjust function pointers for this state's exit
        this._currentStateExitHandler = this._TEST9B_ROOT__B3_exit;
    }
    
    // Thread safe.
    StateIdToString(/** @type {Spec2Sm.StateId} */ id)
    {
        switch (id)
        {
            case Spec2Sm.StateId.ROOT: return "ROOT";
            case Spec2Sm.StateId.DECIDE: return "DECIDE";
            case Spec2Sm.StateId.PREFIXING: return "PREFIXING";
            case Spec2Sm.StateId.PREFIXING__ORDER_MENU: return "PREFIXING__ORDER_MENU";
            case Spec2Sm.StateId.PREFIXING__OM__BEVERAGE: return "PREFIXING__OM__BEVERAGE";
            case Spec2Sm.StateId.PREFIXING__OM__BEV__NONE: return "PREFIXING__OM__BEV__NONE";
            case Spec2Sm.StateId.PREFIXING__OM__BEV__TEA: return "PREFIXING__OM__BEV__TEA";
            case Spec2Sm.StateId.PREFIXING__OM__BEV__WATER: return "PREFIXING__OM__BEV__WATER";
            case Spec2Sm.StateId.PREFIXING__OM__VEG: return "PREFIXING__OM__VEG";
            case Spec2Sm.StateId.PREFIXING__OM__VEG__NONE: return "PREFIXING__OM__VEG__NONE";
            case Spec2Sm.StateId.PREFIXING__OM__VEG__POTATO: return "PREFIXING__OM__VEG__POTATO";
            case Spec2Sm.StateId.PREFIXING__OM__VEG__YAM: return "PREFIXING__OM__VEG__YAM";
            case Spec2Sm.StateId.PREFIXING__SHOWS_MANUAL_PREFIX: return "PREFIXING__SHOWS_MANUAL_PREFIX";
            case Spec2Sm.StateId.PREFIXING__SHOWS_MANUAL_PREFIX__ORDER_MENU: return "PREFIXING__SHOWS_MANUAL_PREFIX__ORDER_MENU";
            case Spec2Sm.StateId.PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE: return "PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEVERAGE";
            case Spec2Sm.StateId.PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE: return "PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_NONE";
            case Spec2Sm.StateId.PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_TEA: return "PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_TEA";
            case Spec2Sm.StateId.PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER: return "PREFIXING__SHOWS_MANUAL_PREFIX__OM_BEV_WATER";
            case Spec2Sm.StateId.PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG: return "PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG";
            case Spec2Sm.StateId.PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE: return "PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_NONE";
            case Spec2Sm.StateId.PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO: return "PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_POTATO";
            case Spec2Sm.StateId.PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_YAM: return "PREFIXING__SHOWS_MANUAL_PREFIX__OM_VEG_YAM";
            case Spec2Sm.StateId.TEST1_DO_EVENT_TESTING: return "TEST1_DO_EVENT_TESTING";
            case Spec2Sm.StateId.TEST1_ROOT: return "TEST1_ROOT";
            case Spec2Sm.StateId.TEST1_S1: return "TEST1_S1";
            case Spec2Sm.StateId.TEST1_S1_1: return "TEST1_S1_1";
            case Spec2Sm.StateId.TEST1_S2: return "TEST1_S2";
            case Spec2Sm.StateId.TEST10_CHOICE_POINT: return "TEST10_CHOICE_POINT";
            case Spec2Sm.StateId.TEST10_A: return "TEST10_A";
            case Spec2Sm.StateId.TEST10_A_1: return "TEST10_A_1";
            case Spec2Sm.StateId.TEST10_ROOT: return "TEST10_ROOT";
            case Spec2Sm.StateId.TEST10_G: return "TEST10_G";
            case Spec2Sm.StateId.TEST10_G_S0: return "TEST10_G_S0";
            case Spec2Sm.StateId.TEST10_G_S1: return "TEST10_G_S1";
            case Spec2Sm.StateId.TEST10_G_S2: return "TEST10_G_S2";
            case Spec2Sm.StateId.TEST10_G_S3: return "TEST10_G_S3";
            case Spec2Sm.StateId.TEST10_S1: return "TEST10_S1";
            case Spec2Sm.StateId.TEST10_S4: return "TEST10_S4";
            case Spec2Sm.StateId.TEST2_REGULAR_EVENT_TESTING: return "TEST2_REGULAR_EVENT_TESTING";
            case Spec2Sm.StateId.TEST2_ROOT: return "TEST2_ROOT";
            case Spec2Sm.StateId.TEST2_S1: return "TEST2_S1";
            case Spec2Sm.StateId.TEST2_S1_1: return "TEST2_S1_1";
            case Spec2Sm.StateId.TEST2_S2: return "TEST2_S2";
            case Spec2Sm.StateId.TEST3_BEHAVIOR_ORDERING: return "TEST3_BEHAVIOR_ORDERING";
            case Spec2Sm.StateId.TEST3_ROOT: return "TEST3_ROOT";
            case Spec2Sm.StateId.TEST3_S1: return "TEST3_S1";
            case Spec2Sm.StateId.TEST3_S2: return "TEST3_S2";
            case Spec2Sm.StateId.TEST3_S3: return "TEST3_S3";
            case Spec2Sm.StateId.TEST4_PARENT_CHILD_TRANSITIONS: return "TEST4_PARENT_CHILD_TRANSITIONS";
            case Spec2Sm.StateId.TEST4_B_AND_OTHERS: return "TEST4_B_AND_OTHERS";
            case Spec2Sm.StateId.TEST4B_LOCAL: return "TEST4B_LOCAL";
            case Spec2Sm.StateId.TEST4B_G: return "TEST4B_G";
            case Spec2Sm.StateId.TEST4B_G_1: return "TEST4B_G_1";
            case Spec2Sm.StateId.TEST4C_LOCAL_TO_ALIAS: return "TEST4C_LOCAL_TO_ALIAS";
            case Spec2Sm.StateId.TEST4C_G: return "TEST4C_G";
            case Spec2Sm.StateId.TEST4C_G_1: return "TEST4C_G_1";
            case Spec2Sm.StateId.TEST4D_EXTERNAL: return "TEST4D_EXTERNAL";
            case Spec2Sm.StateId.TEST4D_G: return "TEST4D_G";
            case Spec2Sm.StateId.TEST4D_G_1: return "TEST4D_G_1";
            case Spec2Sm.StateId.TEST4_DECIDE: return "TEST4_DECIDE";
            case Spec2Sm.StateId.TEST4_ROOT: return "TEST4_ROOT";
            case Spec2Sm.StateId.TEST4_S1: return "TEST4_S1";
            case Spec2Sm.StateId.TEST4_S10: return "TEST4_S10";
            case Spec2Sm.StateId.TEST4_S10_1: return "TEST4_S10_1";
            case Spec2Sm.StateId.TEST4_S2: return "TEST4_S2";
            case Spec2Sm.StateId.TEST4_S20: return "TEST4_S20";
            case Spec2Sm.StateId.TEST4_S20_1: return "TEST4_S20_1";
            case Spec2Sm.StateId.TEST4_S3: return "TEST4_S3";
            case Spec2Sm.StateId.TEST5_PARENT_CHILD_TRANSITIONS_ALIAS: return "TEST5_PARENT_CHILD_TRANSITIONS_ALIAS";
            case Spec2Sm.StateId.TEST5_ROOT: return "TEST5_ROOT";
            case Spec2Sm.StateId.TEST5_S1: return "TEST5_S1";
            case Spec2Sm.StateId.TEST5_S2: return "TEST5_S2";
            case Spec2Sm.StateId.TEST5_S3: return "TEST5_S3";
            case Spec2Sm.StateId.TEST6_VARIABLES: return "TEST6_VARIABLES";
            case Spec2Sm.StateId.TEST6_ROOT: return "TEST6_ROOT";
            case Spec2Sm.StateId.TEST6_ROOT__AUTO_VAR_TEST: return "TEST6_ROOT__AUTO_VAR_TEST";
            case Spec2Sm.StateId.TEST6_ROOT__AUTO_VAR_TEST__S1: return "TEST6_ROOT__AUTO_VAR_TEST__S1";
            case Spec2Sm.StateId.TEST6_ROOT__AUTO_VAR_TEST__S2: return "TEST6_ROOT__AUTO_VAR_TEST__S2";
            case Spec2Sm.StateId.TEST6_ROOT__DECIDE: return "TEST6_ROOT__DECIDE";
            case Spec2Sm.StateId.TEST6_ROOT__NORMAL: return "TEST6_ROOT__NORMAL";
            case Spec2Sm.StateId.TEST6_ROOT__NORMAL__S1: return "TEST6_ROOT__NORMAL__S1";
            case Spec2Sm.StateId.TEST6_ROOT__NORMAL__S2: return "TEST6_ROOT__NORMAL__S2";
            case Spec2Sm.StateId.TEST7_INITIAL_OR_HISTORY: return "TEST7_INITIAL_OR_HISTORY";
            case Spec2Sm.StateId.TEST7: return "TEST7";
            case Spec2Sm.StateId.T7__DEEP_HISTORY1: return "T7__DEEP_HISTORY1";
            case Spec2Sm.StateId.T7__DH1__SANTAS_WORKSHOP: return "T7__DH1__SANTAS_WORKSHOP";
            case Spec2Sm.StateId.T7__DH1__ALIENS_DETECTED: return "T7__DH1__ALIENS_DETECTED";
            case Spec2Sm.StateId.T7__DH1__GET_BACKUP: return "T7__DH1__GET_BACKUP";
            case Spec2Sm.StateId.T7__DH1__HERO: return "T7__DH1__HERO";
            case Spec2Sm.StateId.T7__DH1__CALL_BATMAN: return "T7__DH1__CALL_BATMAN";
            case Spec2Sm.StateId.T7__DH1__CALL_THOR: return "T7__DH1__CALL_THOR";
            case Spec2Sm.StateId.T7__DH1__LOCAL_HELP: return "T7__DH1__LOCAL_HELP";
            case Spec2Sm.StateId.T7__DH1__BUDDY_ELF: return "T7__DH1__BUDDY_ELF";
            case Spec2Sm.StateId.T7__DH1__POLAR_BEARS: return "T7__DH1__POLAR_BEARS";
            case Spec2Sm.StateId.T7__DH1__GIVE_COOKIES: return "T7__DH1__GIVE_COOKIES";
            case Spec2Sm.StateId.T7__DH1__SNOWBALL_FIGHT: return "T7__DH1__SNOWBALL_FIGHT";
            case Spec2Sm.StateId.T7__DH1__BUILD: return "T7__DH1__BUILD";
            case Spec2Sm.StateId.T7__DH1__TOOL: return "T7__DH1__TOOL";
            case Spec2Sm.StateId.T7__DH1__CIRCULAR_SAW: return "T7__DH1__CIRCULAR_SAW";
            case Spec2Sm.StateId.T7__DH1__IMPACT_DRILL: return "T7__DH1__IMPACT_DRILL";
            case Spec2Sm.StateId.T7__DH1__TOY: return "T7__DH1__TOY";
            case Spec2Sm.StateId.T7__DH1__GLOW_WORM: return "T7__DH1__GLOW_WORM";
            case Spec2Sm.StateId.T7__DH1__RACE_CAR: return "T7__DH1__RACE_CAR";
            case Spec2Sm.StateId.T7__DH1__ROBOT: return "T7__DH1__ROBOT";
            case Spec2Sm.StateId.T7__DH1__BATTLEBOT: return "T7__DH1__BATTLEBOT";
            case Spec2Sm.StateId.T7__DH1__WALL_E: return "T7__DH1__WALL_E";
            case Spec2Sm.StateId.T7__DH1__TEDDY_BEAR: return "T7__DH1__TEDDY_BEAR";
            case Spec2Sm.StateId.T7__DEEP_HISTORY2: return "T7__DEEP_HISTORY2";
            case Spec2Sm.StateId.T7__DH2__STATE_0: return "T7__DH2__STATE_0";
            case Spec2Sm.StateId.T7__DH2__STATE_1: return "T7__DH2__STATE_1";
            case Spec2Sm.StateId.T7__DH2__STATE_2: return "T7__DH2__STATE_2";
            case Spec2Sm.StateId.T7__DH2__STATE_6: return "T7__DH2__STATE_6";
            case Spec2Sm.StateId.T7__DH2__STATE_9: return "T7__DH2__STATE_9";
            case Spec2Sm.StateId.T7__DH2__STATE_3: return "T7__DH2__STATE_3";
            case Spec2Sm.StateId.T7__DEEP_HISTORY3: return "T7__DEEP_HISTORY3";
            case Spec2Sm.StateId.T7__DH3__STATE_0: return "T7__DH3__STATE_0";
            case Spec2Sm.StateId.T7__DH3__STATE_1: return "T7__DH3__STATE_1";
            case Spec2Sm.StateId.T7__DH3__STATE_2: return "T7__DH3__STATE_2";
            case Spec2Sm.StateId.T7__DH3__STATE_6: return "T7__DH3__STATE_6";
            case Spec2Sm.StateId.T7__DH3__STATE_9: return "T7__DH3__STATE_9";
            case Spec2Sm.StateId.T7__DH3__STATE_3: return "T7__DH3__STATE_3";
            case Spec2Sm.StateId.T7__HISTORY1: return "T7__HISTORY1";
            case Spec2Sm.StateId.T7__H1__OFF: return "T7__H1__OFF";
            case Spec2Sm.StateId.T7__H1__OFF1: return "T7__H1__OFF1";
            case Spec2Sm.StateId.T7__H1__OFF2: return "T7__H1__OFF2";
            case Spec2Sm.StateId.T7__H1__OFF3: return "T7__H1__OFF3";
            case Spec2Sm.StateId.T7__H1__ON: return "T7__H1__ON";
            case Spec2Sm.StateId.T7__H1__ON1: return "T7__H1__ON1";
            case Spec2Sm.StateId.T7__H1__ON2: return "T7__H1__ON2";
            case Spec2Sm.StateId.T7__H1__ON3: return "T7__H1__ON3";
            case Spec2Sm.StateId.T7__INITIAL1: return "T7__INITIAL1";
            case Spec2Sm.StateId.T7__INITIAL1__PARENT: return "T7__INITIAL1__PARENT";
            case Spec2Sm.StateId.T7__INITIAL1__G: return "T7__INITIAL1__G";
            case Spec2Sm.StateId.T7__INITIAL1__G_S1: return "T7__INITIAL1__G_S1";
            case Spec2Sm.StateId.T7__INITIAL1__G_S2: return "T7__INITIAL1__G_S2";
            case Spec2Sm.StateId.T7__INITIAL1__G_S3: return "T7__INITIAL1__G_S3";
            case Spec2Sm.StateId.T7__INITIAL1__S1: return "T7__INITIAL1__S1";
            case Spec2Sm.StateId.TEST7_DECIDE: return "TEST7_DECIDE";
            case Spec2Sm.StateId.TEST8_ENTRY_CHOICE: return "TEST8_ENTRY_CHOICE";
            case Spec2Sm.StateId.TEST8_ROOT: return "TEST8_ROOT";
            case Spec2Sm.StateId.TEST8_G: return "TEST8_G";
            case Spec2Sm.StateId.TEST8_G_S1: return "TEST8_G_S1";
            case Spec2Sm.StateId.TEST8_G_S2: return "TEST8_G_S2";
            case Spec2Sm.StateId.TEST8_G_S3: return "TEST8_G_S3";
            case Spec2Sm.StateId.TEST8_S1: return "TEST8_S1";
            case Spec2Sm.StateId.TEST9_EXIT_CHOICE: return "TEST9_EXIT_CHOICE";
            case Spec2Sm.StateId.TEST9_DECIDE: return "TEST9_DECIDE";
            case Spec2Sm.StateId.TEST9_ROOT: return "TEST9_ROOT";
            case Spec2Sm.StateId.TEST9_G_S1: return "TEST9_G_S1";
            case Spec2Sm.StateId.TEST9_G_S2: return "TEST9_G_S2";
            case Spec2Sm.StateId.TEST9_G_S3: return "TEST9_G_S3";
            case Spec2Sm.StateId.TEST9_G_S4: return "TEST9_G_S4";
            case Spec2Sm.StateId.TEST9_S1: return "TEST9_S1";
            case Spec2Sm.StateId.TEST9_S1_1: return "TEST9_S1_1";
            case Spec2Sm.StateId.TEST9A_ROOT: return "TEST9A_ROOT";
            case Spec2Sm.StateId.TEST9A_S1: return "TEST9A_S1";
            case Spec2Sm.StateId.TEST9A_S1_1: return "TEST9A_S1_1";
            case Spec2Sm.StateId.TEST9B_ROOT: return "TEST9B_ROOT";
            case Spec2Sm.StateId.TEST9B_ROOT__A1: return "TEST9B_ROOT__A1";
            case Spec2Sm.StateId.TEST9B_ROOT__A2: return "TEST9B_ROOT__A2";
            case Spec2Sm.StateId.TEST9B_ROOT__A3: return "TEST9B_ROOT__A3";
            case Spec2Sm.StateId.TEST9B_ROOT__A4: return "TEST9B_ROOT__A4";
            case Spec2Sm.StateId.TEST9B_ROOT__B1: return "TEST9B_ROOT__B1";
            case Spec2Sm.StateId.TEST9B_ROOT__B2: return "TEST9B_ROOT__B2";
            case Spec2Sm.StateId.TEST9B_ROOT__B3: return "TEST9B_ROOT__B3";
            case Spec2Sm.StateId.TEST9B_ROOT__B4: return "TEST9B_ROOT__B4";
            default: return "?";
        }
    }
    
    // Thread safe.
    EventIdToString(/** @type {Spec2Sm.EventId} */ id)
    {
        switch (id)
        {
            case Spec2Sm.EventId.DO: return "DO";
            case Spec2Sm.EventId.EV1: return "EV1";
            case Spec2Sm.EventId.EV10: return "EV10";
            case Spec2Sm.EventId.EV2: return "EV2";
            case Spec2Sm.EventId.EV3: return "EV3";
            case Spec2Sm.EventId.EV4: return "EV4";
            case Spec2Sm.EventId.EV5: return "EV5";
            case Spec2Sm.EventId.EV6: return "EV6";
            case Spec2Sm.EventId.EV7: return "EV7";
            case Spec2Sm.EventId.EV8: return "EV8";
            case Spec2Sm.EventId.EV9: return "EV9";
            case Spec2Sm.EventId.EVBACK: return "EVBACK";
            case Spec2Sm.EventId.EVCLOSE: return "EVCLOSE";
            case Spec2Sm.EventId.EVOPEN: return "EVOPEN";
            case Spec2Sm.EventId.EVSTEP: return "EVSTEP";
            default: return "?";
        }
    }
}
