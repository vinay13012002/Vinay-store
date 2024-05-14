export default function NumberFormat({ number }) {
  let formattedNum = new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 21,
  }).format(number);

  console.log(formattedNum, "formatted number");

  return <span>{formattedNum}</span>;
}
