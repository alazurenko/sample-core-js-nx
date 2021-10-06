/* eslint-disable-next-line */
export interface MylibraryProps {}

export function Mylibrary(props: MylibraryProps) {
  fetch('https://nx.dev/l/a/cli/generate').then(console.log);

  return (
    <div>
      <h1>Welcome to Mylibrary!</h1>
    </div>
  );
}

export default Mylibrary;

