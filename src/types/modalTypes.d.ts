declare interface ModalPropsType {
  text: string;
  OnCloseClick: React.Dispatch<React.SetStateAction<boolean>>;
  OnOkClick: () => void;
}
