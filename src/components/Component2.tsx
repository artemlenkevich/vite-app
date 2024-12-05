// document.querySelector('body')!.style.backgroundColor = 'red'

// @ts-expect-error: ignore
window.a = 5

function mylog() {
  console.log('hello');
}
mylog()

export const Component2 = () => {
  return <div>Component2</div>;
};