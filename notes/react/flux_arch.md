We have an Action, ActionDispatcher, Store, Component

- Store has a method called SAVE_TO_DB which writes to a DB
- Store registers a callback with the ActionDispatcher which says “Listen out for any action being dispatched called CREATE. When you get one, call our store method SAVE_TO_DB with any arguments"
- UI Component has a button. When you hit this button, ToDoActions.Create() is called.
- ToDoActions.Create() dispatches an action to the AppDispatcher called CREATE, passing in some arguments.
- The AppDispatcher marries up our action to the store callback (by name - they’re both called CREATE) and hey presto, SAVE_TO_DB is executed.

The end result, in a very decoupled fashion, is that when you hit the save button, SAVE_TO_DB is called on our store.