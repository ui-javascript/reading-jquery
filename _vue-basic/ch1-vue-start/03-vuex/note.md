# vuex笔记

- 基础 https://vuex.vuejs.org/zh-cn/api.html

  - state
  - mutation
  - getters
  - action

```javascript
Vuex 的状态存储是响应式的

单一状态树
每个应用将仅仅包含一个 store 实例

在调试的过程中也能轻易地取得整个当前应用状态的快照

Vuex 通过 store 选项，
提供了一种机制将状态从根组件『注入』到每一个子组件中（需调用 Vue.use(Vuex)）

mapState 辅助函数
帮助我们生成计算属性

如果有些状态严格属于单个组件，最好还是作为组件的局部状态。
你应该根据你的应用开发需要进行权衡和确定。

更改 Vuex 的 store 中的状态的唯一方法是提交 mutation

// Payload 向 store.commit 传入额外的参数
mutations: {
  increment (state, n) {
    state.count += n
  }
}
store.commit('increment', 10)

store.commit({
  type: 'increment',
  amount: 10
})

// 使用常量替代 Mutation 事件类型

mutation 必须是同步函数
在 mutation 中混合异步调用会导致你的程序很难调试
```

- Actions

```javascript
Action 提交的是 mutation，而不是直接变更状态。
Action 可以包含任意异步操作。

// 通过 store.dispatch 方法触发
// 以载荷形式分发
store.dispatch('incrementAsync', {
  amount: 10
})

// 以对象形式分发
store.dispatch({
  type: 'incrementAsync',
  amount: 10
})


// 组合 Actions
actions: {
  // ...
  actionB ({ dispatch, commit }) {
    return dispatch('actionA').then(() => {
      commit('someOtherMutation')
    })
  }
}

一个 store.dispatch 在不同模块中可以触发多个 action 函数。
在这种情况下，只有当所有触发函数完成后，返回的 Promise 才会执行。

```

- Modules

```js
Vuex 允许我们将 store 分割成模块

你可以通过插件的参数对象来允许用户指定空间名称
```

- 严格模式

```js
在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，
将会抛出错误。
这能保证所有的状态变更都能被调试工具跟踪到。

const store = new Vuex.Store({
  // ...
  strict: process.env.NODE_ENV !== 'production'
})
```
