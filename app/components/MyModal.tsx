import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function MyModal(props: any) {
  const { isOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");

  let info = props.info;

  return (
    <>
      <Modal backdrop={"blur"} isOpen={props.isOpen} onClose={props.onClose}>
        <ModalContent>
          <>
            <ModalHeader className={`flex flex-col gap-1 text-${props.color}`}>
              {info["heading"]}
            </ModalHeader>
            <ModalBody>
              <p>{info["text"]}</p>
            </ModalBody>
            <ModalFooter>
              <Button color={props.color} onClick={props.onClose}>
                <h5 className="text-white">Close</h5>
              </Button>
            </ModalFooter>
          </>

        </ModalContent>
      </Modal>
    </>
  );
}
