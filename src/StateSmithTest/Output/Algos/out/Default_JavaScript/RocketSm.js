// Autogenerated with StateSmith.
// Algorithm: Balanced2. See https://github.com/StateSmith/StateSmith/wiki/Algorithms

// Generated state machine
class RocketSm
{
    static EventId = 
    {
        DO : 0, // The `do` event is special. State event handlers do not consume this event (ancestors all get it too) unless a transition occurs.
    }
    static { Object.freeze(this.EventId); }
    
    static EventIdCount = 1;
    static { Object.freeze(this.EventIdCount); }
    
    static StateId = 
    {
        ROOT : 0,
        GROUP : 1,
        G1 : 2,
        G2 : 3,
    }
    static { Object.freeze(this.StateId); }
    
    static StateIdCount = 4;
    static { Object.freeze(this.StateIdCount); }
    
    // Used internally by state machine. Feel free to inspect, but don't modify.
    stateId;
    
    // Starts the state machine. Must be called before dispatching events. Not thread safe.
    start()
    {
        this.#ROOT_enter();
        // ROOT behavior
        // uml: TransitionTo(ROOT.<InitialState>)
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `ROOT.<InitialState>`.
            // ROOT.<InitialState> is a pseudo state and cannot have an `enter` trigger.
            
            // ROOT.<InitialState> behavior
            // uml: TransitionTo(group)
            {
                // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: ``.
                
                // Step 3: Enter/move towards transition target `group`.
                this.#GROUP_enter();
                
                // group.<InitialState> behavior
                // uml: TransitionTo(g1)
                {
                    // Step 1: Exit states until we reach `group` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                    
                    // Step 2: Transition action: ``.
                    
                    // Step 3: Enter/move towards transition target `g1`.
                    this.#G1_enter();
                    
                    // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                    return;
                } // end of behavior for group.<InitialState>
            } // end of behavior for ROOT.<InitialState>
        } // end of behavior for ROOT
    }
    
    // Dispatches an event to the state machine. Not thread safe.
    // Note! This function assumes that the `eventId` parameter is valid.
    dispatchEvent(eventId)
    {
        
        switch (this.stateId)
        {
            // STATE: RocketSm
            case RocketSm.StateId.ROOT:
                // state and ancestors have no handler for `do` event.
                break;
            
            // STATE: group
            case RocketSm.StateId.GROUP:
                // state and ancestors have no handler for `do` event.
                break;
            
            // STATE: g1
            case RocketSm.StateId.G1:
                this.#G1_do(); 
                break;
            
            // STATE: g2
            case RocketSm.StateId.G2:
                this.#G2_do(); 
                break;
        }
        
    }
    
    // This function is used when StateSmith doesn't know what the active leaf state is at
    // compile time due to sub states or when multiple states need to be exited.
    #exitUpToStateHandler(desiredState)
    {
        while (this.stateId != desiredState)
        {
            switch (this.stateId)
            {
                case RocketSm.StateId.ROOT: this.#ROOT_exit(); break;
                
                case RocketSm.StateId.GROUP: this.#GROUP_exit(); break;
                
                case RocketSm.StateId.G1: this.#G1_exit(); break;
                
                case RocketSm.StateId.G2: this.#G2_exit(); break;
            }
        }
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state ROOT
    ////////////////////////////////////////////////////////////////////////////////
    
    #ROOT_enter()
    {
        this.stateId = RocketSm.StateId.ROOT;
    }
    
    #ROOT_exit()
    {
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state GROUP
    ////////////////////////////////////////////////////////////////////////////////
    
    #GROUP_enter()
    {
        this.stateId = RocketSm.StateId.GROUP;
    }
    
    #GROUP_exit()
    {
        this.stateId = RocketSm.StateId.ROOT;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state G1
    ////////////////////////////////////////////////////////////////////////////////
    
    #G1_enter()
    {
        this.stateId = RocketSm.StateId.G1;
    }
    
    #G1_exit()
    {
        this.stateId = RocketSm.StateId.GROUP;
    }
    
    #G1_do()
    {
        // g1 behavior
        // uml: do TransitionTo(g2)
        {
            // Step 1: Exit states until we reach `group` state (Least Common Ancestor for transition).
            this.#G1_exit();
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `g2`.
            this.#G2_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return;
        } // end of behavior for g1
        
        // No ancestor handles this event.
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state G2
    ////////////////////////////////////////////////////////////////////////////////
    
    #G2_enter()
    {
        this.stateId = RocketSm.StateId.G2;
    }
    
    #G2_exit()
    {
        this.stateId = RocketSm.StateId.GROUP;
    }
    
    #G2_do()
    {
        // g2 behavior
        // uml: do [x > 50] TransitionTo(g1)
        if (x > 50)
        {
            // Step 1: Exit states until we reach `group` state (Least Common Ancestor for transition).
            this.#G2_exit();
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `g1`.
            this.#G1_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return;
        } // end of behavior for g2
        
        // No ancestor handles this event.
    }
    
    // Thread safe.
    static stateIdToString(id)
    {
        switch (id)
        {
            case RocketSm.StateId.ROOT: return "ROOT";
            case RocketSm.StateId.GROUP: return "GROUP";
            case RocketSm.StateId.G1: return "G1";
            case RocketSm.StateId.G2: return "G2";
            default: return "?";
        }
    }
    
    // Thread safe.
    static eventIdToString(id)
    {
        switch (id)
        {
            case RocketSm.EventId.DO: return "DO";
            default: return "?";
        }
    }
}
