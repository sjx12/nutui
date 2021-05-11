# Checkbox 复选按钮

### 介绍

多选按钮用于选择。

### 安装

``` ts
import { createApp } from 'vue';
import { Checkbox } from '@nutui/nutui';

const app = createApp();
app.use(Checkbox);
```

## 基本用法

```html
<nut-checkbox v-model="checkbox1" label="复选框"><span>复选框</span></nut-checkbox>
<nut-checkbox v-model="checkbox2" text-position="left">复选框</nut-checkbox>
```
```ts
setup() {
  return {
    checkbox1: false,
    checkbox2: false,
  };
}
```

## 禁用状态

```html
<nut-checkbox v-model="checkbox3" disabled>未选时禁用状态</nut-checkbox>
<nut-checkbox v-model="checkbox4" disabled>选中时禁用状态</nut-checkbox>
```

```ts
setup() {
  return {
    checkbox3: false,
    checkbox4: true,
  };
}
```

## 自定义尺寸

```html
<nut-checkbox v-model="checkbox5" icon-size="25">自定义尺寸25</nut-checkbox>
<nut-checkbox v-model="checkbox6" icon-size="10">自定义尺寸10</nut-checkbox>
```

```ts
setup() {
  return {
    checkbox5: true,
    checkbox6: false,
  };
}

```

## 自定义图标

这里建议同时设置 `icon-name` 和 `icon-active-name` 属性

```html
<nut-checkbox v-model="checkbox7" icon-name="checklist" icon-active-name="checklist">自定义图标</nut-checkbox>
```

```ts
setup() {
  return {
    checkbox7: true,
  };
}

```

## change事件

值发生变化时，将触发change事件

```html
<nut-checkbox v-model="checkbox8" @change="changeBox3">change复选框</nut-checkbox>
```

```ts
setup() {
  const checkbox = ref(false);
  const changeBox3= (checked: boolean, label: string) => {
    console.log('change事件触发' + checked, label);
	}  
  return {
    checkbox,
    changeBox3
  };
}
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| v-model | 是否处于选中状态 | String | `false`
| disabled | 是否禁用选择 | Boolean | `false`
| text-position | 文本所在的位置，可选值：`left`,`right` | String | `right`
| icon-size | [图标尺寸](#/icon) | String、Number | `18`
| icon-name | [图标名称](#/icon)，选中前(建议和`icon-active-name`一起修改) | String | `'check-normal'`
| icon-active-name | [图标名称](#/icon)，选中后(建议和`icon-name`一起修改) | String | `'checked'`
| label | 复选框的文本内容 | String | -



## Event

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| change | 值变化时触发 | (state, label),`state`代表当前状态，`label`表示当前选中的值