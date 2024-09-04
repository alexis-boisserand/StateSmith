// Autogenerated with StateSmith.
// Algorithm: Balanced2. See https://github.com/StateSmith/StateSmith/wiki/Algorithms

#include "RocketSm.h"
#include <stdbool.h> // required for `consume_event` flag
#include <string.h> // for memset

// This function is used when StateSmith doesn't know what the active leaf state is at
// compile time due to sub states or when multiple states need to be exited.
static void exit_up_to_state_handler(RocketSm* sm, RocketSm_StateId desired_state);

static void ROOT_enter(RocketSm* sm);

static void ROOT_exit(RocketSm* sm);

static void GROUP_enter(RocketSm* sm);

static void GROUP_exit(RocketSm* sm);

static void GROUP_ev1(RocketSm* sm);

static void G1_enter(RocketSm* sm);

static void G1_exit(RocketSm* sm);

static void G1_ev1(RocketSm* sm);

static void G2_enter(RocketSm* sm);

static void G2_exit(RocketSm* sm);

static void G2_ev2(RocketSm* sm);

static void S1_enter(RocketSm* sm);

static void S1_exit(RocketSm* sm);


// State machine constructor. Must be called before start or dispatch event functions. Not thread safe.
void RocketSm_ctor(RocketSm* sm)
{
    memset(sm, 0, sizeof(*sm));
}

// Starts the state machine. Must be called before dispatching events. Not thread safe.
void RocketSm_start(RocketSm* sm)
{
    ROOT_enter(sm);
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
            GROUP_enter(sm);
            
            // group.<InitialState> behavior
            // uml: TransitionTo(g1)
            {
                // Step 1: Exit states until we reach `group` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                // Step 2: Transition action: ``.
                
                // Step 3: Enter/move towards transition target `g1`.
                G1_enter(sm);
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                return;
            } // end of behavior for group.<InitialState>
        } // end of behavior for ROOT.<InitialState>
    } // end of behavior for ROOT
}

// Dispatches an event to the state machine. Not thread safe.
// Note! This function assumes that the `event_id` parameter is valid.
void RocketSm_dispatch_event(RocketSm* sm, RocketSm_EventId event_id)
{
    switch (sm->state_id)
    {
        // STATE: RocketSm
        case RocketSm_StateId_ROOT:
            switch (event_id)
            {
                // Events not handled by this state:
                case RocketSm_EventId_EV1: break;
                case RocketSm_EventId_EV2: break;
            }
            break;
        
        // STATE: group
        case RocketSm_StateId_GROUP:
            switch (event_id)
            {
                case RocketSm_EventId_EV1: GROUP_ev1(sm); break;
                // Events not handled by this state:
                case RocketSm_EventId_EV2: break;
            }
            break;
        
        // STATE: g1
        case RocketSm_StateId_G1:
            switch (event_id)
            {
                case RocketSm_EventId_EV1: G1_ev1(sm); break;
                // Events not handled by this state:
                case RocketSm_EventId_EV2: break;
            }
            break;
        
        // STATE: g2
        case RocketSm_StateId_G2:
            switch (event_id)
            {
                case RocketSm_EventId_EV2: G2_ev2(sm); break;
                // Events not handled by this state:
                case RocketSm_EventId_EV1: GROUP_ev1(sm); break;
            }
            break;
        
        // STATE: s1
        case RocketSm_StateId_S1:
            switch (event_id)
            {
                // Events not handled by this state:
                case RocketSm_EventId_EV1: break;
                case RocketSm_EventId_EV2: break;
            }
            break;
    }
    
}

// This function is used when StateSmith doesn't know what the active leaf state is at
// compile time due to sub states or when multiple states need to be exited.
static void exit_up_to_state_handler(RocketSm* sm, RocketSm_StateId desired_state)
{
    while (sm->state_id != desired_state)
    {
        switch (sm->state_id)
        {
            case RocketSm_StateId_ROOT: ROOT_exit(sm); break;
            
            case RocketSm_StateId_GROUP: GROUP_exit(sm); break;
            
            case RocketSm_StateId_G1: G1_exit(sm); break;
            
            case RocketSm_StateId_G2: G2_exit(sm); break;
            
            case RocketSm_StateId_S1: S1_exit(sm); break;
        }
    }
}


////////////////////////////////////////////////////////////////////////////////
// event handlers for state ROOT
////////////////////////////////////////////////////////////////////////////////

static void ROOT_enter(RocketSm* sm)
{
    sm->state_id = RocketSm_StateId_ROOT;
}

static void ROOT_exit(RocketSm* sm)
{
    // State machine root is a special case. It cannot be exited. Mark as unused.
    (void)sm;
}


////////////////////////////////////////////////////////////////////////////////
// event handlers for state GROUP
////////////////////////////////////////////////////////////////////////////////

static void GROUP_enter(RocketSm* sm)
{
    sm->state_id = RocketSm_StateId_GROUP;
}

static void GROUP_exit(RocketSm* sm)
{
    sm->state_id = RocketSm_StateId_ROOT;
}

static void GROUP_ev1(RocketSm* sm)
{
    // group behavior
    // uml: EV1 TransitionTo(s1)
    {
        // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
        exit_up_to_state_handler(sm, RocketSm_StateId_ROOT);
        
        // Step 2: Transition action: ``.
        
        // Step 3: Enter/move towards transition target `s1`.
        S1_enter(sm);
        
        // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
        return;
    } // end of behavior for group
    
    // No ancestor handles this event.
}


////////////////////////////////////////////////////////////////////////////////
// event handlers for state G1
////////////////////////////////////////////////////////////////////////////////

static void G1_enter(RocketSm* sm)
{
    sm->state_id = RocketSm_StateId_G1;
}

static void G1_exit(RocketSm* sm)
{
    sm->state_id = RocketSm_StateId_GROUP;
}

static void G1_ev1(RocketSm* sm)
{
    bool consume_event = false;
    
    // g1 behavior
    // uml: EV1 [a > 20] TransitionTo(g2)
    if (a > 20)
    {
        // Step 1: Exit states until we reach `group` state (Least Common Ancestor for transition).
        G1_exit(sm);
        
        // Step 2: Transition action: ``.
        
        // Step 3: Enter/move towards transition target `g2`.
        G2_enter(sm);
        
        // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
        return;
    } // end of behavior for g1
    
    // Check if event has been consumed before calling ancestor handler.
    if (!consume_event)
    {
        GROUP_ev1(sm);
    }
}


////////////////////////////////////////////////////////////////////////////////
// event handlers for state G2
////////////////////////////////////////////////////////////////////////////////

static void G2_enter(RocketSm* sm)
{
    sm->state_id = RocketSm_StateId_G2;
}

static void G2_exit(RocketSm* sm)
{
    sm->state_id = RocketSm_StateId_GROUP;
}

static void G2_ev2(RocketSm* sm)
{
    // g2 behavior
    // uml: EV2 TransitionTo(g1)
    {
        // Step 1: Exit states until we reach `group` state (Least Common Ancestor for transition).
        G2_exit(sm);
        
        // Step 2: Transition action: ``.
        
        // Step 3: Enter/move towards transition target `g1`.
        G1_enter(sm);
        
        // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
        return;
    } // end of behavior for g2
    
    // No ancestor handles this event.
}


////////////////////////////////////////////////////////////////////////////////
// event handlers for state S1
////////////////////////////////////////////////////////////////////////////////

static void S1_enter(RocketSm* sm)
{
    sm->state_id = RocketSm_StateId_S1;
}

static void S1_exit(RocketSm* sm)
{
    sm->state_id = RocketSm_StateId_ROOT;
}

// Thread safe.
char const * RocketSm_state_id_to_string(RocketSm_StateId id)
{
    switch (id)
    {
        case RocketSm_StateId_ROOT: return "ROOT";
        case RocketSm_StateId_GROUP: return "GROUP";
        case RocketSm_StateId_G1: return "G1";
        case RocketSm_StateId_G2: return "G2";
        case RocketSm_StateId_S1: return "S1";
        default: return "?";
    }
}

// Thread safe.
char const * RocketSm_event_id_to_string(RocketSm_EventId id)
{
    switch (id)
    {
        case RocketSm_EventId_EV1: return "EV1";
        case RocketSm_EventId_EV2: return "EV2";
        default: return "?";
    }
}
