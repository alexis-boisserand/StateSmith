// Autogenerated with StateSmith.
// Algorithm: Balanced1. See https://github.com/StateSmith/StateSmith/wiki/Algorithms

#pragma once  // You can also specify normal include guard. See https://github.com/StateSmith/StateSmith/issues/112
#include <stdint.h>
// any text you put in IRenderConfigC.HFileIncludes (like this comment) will be written to the generated .h file

typedef enum Spec1Sm_EventId
{
    Spec1Sm_EventId_EV1 = 0,
    Spec1Sm_EventId_EV2 = 1
} Spec1Sm_EventId;

enum
{
    Spec1Sm_EventIdCount = 2
};

typedef enum Spec1Sm_StateId
{
    Spec1Sm_StateId_ROOT = 0,
    Spec1Sm_StateId_S = 1,
    Spec1Sm_StateId_S1 = 2,
    Spec1Sm_StateId_S11 = 3,
    Spec1Sm_StateId_T1 = 4,
    Spec1Sm_StateId_T11 = 5,
    Spec1Sm_StateId_T111 = 6
} Spec1Sm_StateId;

enum
{
    Spec1Sm_StateIdCount = 7
};


// Generated state machine
// forward declaration
typedef struct Spec1Sm Spec1Sm;

// State machine variables. Can be used for inputs, outputs, user variables...
typedef struct Spec1Sm_Vars
{
    uint8_t count;
} Spec1Sm_Vars;


// event handler type
typedef void (*Spec1Sm_Func)(Spec1Sm* sm);

// State machine constructor. Must be called before start or dispatch event functions. Not thread safe.
void Spec1Sm_ctor(Spec1Sm* sm);

// Starts the state machine. Must be called before dispatching events. Not thread safe.
void Spec1Sm_start(Spec1Sm* sm);

// Dispatches an event to the state machine. Not thread safe.
void Spec1Sm_dispatch_event(Spec1Sm* sm, Spec1Sm_EventId event_id);

// Thread safe.
char const * Spec1Sm_state_id_to_string(Spec1Sm_StateId id);

// Thread safe.
char const * Spec1Sm_event_id_to_string(Spec1Sm_EventId id);

// Generated state machine
struct Spec1Sm
{
    // Used internally by state machine. Feel free to inspect, but don't modify.
    Spec1Sm_StateId state_id;
    
    // Used internally by state machine. Don't modify.
    Spec1Sm_Func ancestor_event_handler;
    
    // Used internally by state machine. Don't modify.
    Spec1Sm_Func current_event_handlers[Spec1Sm_EventIdCount];
    
    // Used internally by state machine. Don't modify.
    Spec1Sm_Func current_state_exit_handler;
    
    // Variables. Can be used for inputs, outputs, user variables...
    Spec1Sm_Vars vars;
};

