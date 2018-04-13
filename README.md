# React-16-practice

## Return string and Fragment

*   React 16 support return string component
*   Can't return element list without array or span

```js
render() {
    return (
        [
            <div key={1}></div>,
            <div key={2}></div>,
            <div key={3}></div>
        ]
    )
}

OR

render() {
    return (
        <span>
            <div></div>,
            <div></div>,
            <div></div>
        </span>
    )
}
```

*   If we use span, we can see the unnecessary span tag.

```js
/// Fragment
render() {
    return (
        <Fragment>
            <div></div>
            <div></div>
            <div></div>
        </Fragment>
    )
}
```

*   Remove Fragment tag when rendering.
