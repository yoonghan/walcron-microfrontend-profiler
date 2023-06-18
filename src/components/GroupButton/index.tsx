import Button from "../Button";

interface Props {
  buttons: {
    text: string;
  }[];
}

const GroupButton = ({ buttons }: Props) => {
  return (
    <>
      {buttons.map((button) => (
        <Button key={button.text} />
      ))}
    </>
  );
};

export default GroupButton;
