---
id: 'scheduler'
title: 'Interface: Scheduler'
sidebar_label: 'Scheduler'
custom_edit_url: null
hide_title: true
---

# Interface: Scheduler

## Properties

### errors

• **errors**: _object_

#### Type declaration:

| Name              | Type                                                                                                                                               |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| `map`             | _Map_<[_Selection_](../classes/selection.md), [_gqlessError_](../classes/gqlesserror.md)\>                                                         |
| `removeErrors`    | (`selectionsCleaned`: [_Selection_](../classes/selection.md)[]) => _void_                                                                          |
| `retryPromise`    | (`retryPromise`: _Promise_<SchedulerPromiseValue\>, `selections`: _Set_<[_Selection_](../classes/selection.md)\>) => _void_                        |
| `subscribeErrors` | (`fn`: ErrorSubscriptionFn) => () => _void_                                                                                                        |
| `triggerError`    | (`newError`: [_gqlessError_](../classes/gqlesserror.md), `selections`: [_Selection_](../classes/selection.md)[], `isLastTry`: _boolean_) => _void_ |

Defined in: [packages/gqless/src/Scheduler/index.ts:39](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Scheduler/index.ts#L39)

---

### isFetching

• **isFetching**: _boolean_

Defined in: [packages/gqless/src/Scheduler/index.ts:53](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Scheduler/index.ts#L53)

---

### pendingSelectionsGroups

• **pendingSelectionsGroups**: _Set_<Set<[_Selection_](../classes/selection.md)\>\>

Defined in: [packages/gqless/src/Scheduler/index.ts:54](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Scheduler/index.ts#L54)

---

### pendingSelectionsGroupsPromises

• **pendingSelectionsGroupsPromises**: _Map_<Set<[_Selection_](../classes/selection.md)\>, Promise<SchedulerPromiseValue\>\>

Defined in: [packages/gqless/src/Scheduler/index.ts:55](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Scheduler/index.ts#L55)

---

### resolving

• **resolving**: _null_ \| _DeferredPromise_<SchedulerPromiseValue\>

Defined in: [packages/gqless/src/Scheduler/index.ts:35](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Scheduler/index.ts#L35)

---

### subscribeResolve

• **subscribeResolve**: (`fn`: (`promise`: _Promise_<SchedulerPromiseValue\>, `selection`: [_Selection_](../classes/selection.md)) => _void_) => () => _void_

#### Type declaration:

▸ (`fn`: (`promise`: _Promise_<SchedulerPromiseValue\>, `selection`: [_Selection_](../classes/selection.md)) => _void_): _function_

#### Parameters:

| Name | Type                                                                                                          |
| :--- | :------------------------------------------------------------------------------------------------------------ |
| `fn` | (`promise`: _Promise_<SchedulerPromiseValue\>, `selection`: [_Selection_](../classes/selection.md)) => _void_ |

**Returns:** () => _void_

Defined in: [packages/gqless/src/Scheduler/index.ts:36](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Scheduler/index.ts#L36)

Defined in: [packages/gqless/src/Scheduler/index.ts:36](https://github.com/gqless/gqless/blob/master/packages/gqless/src/Scheduler/index.ts#L36)