
export default function Toggle(props: { text: string; isOn: boolean; onToggle: (isOn: boolean) => void; }) {
  const { text, isOn, onToggle } = props;
  return (
    <button
      id="ThemeSwitch"
      role="switch"
      aria-checked={isOn}
      onClick={() => {
        onToggle(!isOn);
        console.log("Power is", !isOn ? "ON" : "OFF");
      }}
      className={`h-5 w-11 rounded-full bg-red-500 dark:bg-blue-800`}>
        {text}
      </button>);
}
