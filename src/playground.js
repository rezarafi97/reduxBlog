const store = configureStore({
    reducer: {},
});

const exampleThunkFunction = (dispatch, getState) => {
    const stateBefore = getState();
    console.log(`Counter before: ${stateBefore.counter}`);

    dispatch(increment());

    const stateAfter = getState();
    console.log(`Counter after: ${stateAfter.counter}`);
};

store.dispatch(exampleThunkFunction);

//Dispatch Plain Action
dispatch(increment());

//Thunk Action Creator
const logAndAdd = (amount) => {
    return async (dispatch, getState) => {
        const stateBefore = getState();
        console.log(`Counter before: ${stateBefore.counter}`);

        dispatch(incrementByAmount(amount));

        const stateAfter = getState();
        console.log(`Counter after: ${stateAfter.counter}`);
    };
};

//CreateAsyncThunk
export const fetchBlogs = createAsynThunk("blogs/fetchBlogs", async () => {
    const response = await client.get("url");
    return response.data;
});
//returns start/success/failure action

dispatch(fetchBlogs()); //returns 'blogs/fetchBlogs/pending' action
//if promise is resolved return 'blogs/fetchBlogs/fulfilled' action
//if promise is rejected return 'blogs/fetchBlogs/rejected' action

//extraReducer

//builder.addCase => یک ریدوسر تعریف میکنه که هندل میکنه تنها یک نوع اکشن شناخته شده
//builder.addMatcher => یک ریدوسر تعریف میکنه که به هر اکشنی جواب میده در صورتی که متچر true باشه
//builder.addDefault => یک ریدوسر تعریف میکنه که زمانی اجرا میشه که هیچ ریدوسری در جواب به اکشن نباشه

//createSelector
//Reselect Library
const state1 = getState();

selectBlogsByUser(state1, "user1"); //اجرا میشه چون اولین بار هست
selectBlogsByUser(state1, "user1"); //اجرا نمیشه چون پارامترهای تغییری نکردن
selectBlogsByUser(state1, "user2"); //اجرا میشه چون پارامتر تغییر کرده

//Normalized State
{
    users: {
        ids: ["user1", "user2", "user3"],
        entities : {
            "user1": {id: "user1", firstName: "Younes"},
            "user2": {id: "user2", firstName: "Younes"},
            "user3": {id: "user3", firstName: "Younes"},
        }
    }
}

const userId = "user2";
const userObject = state.users.entities[userId]

//createEntityAdaptor({options})
{ids: [], entities: {} }