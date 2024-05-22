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
  const { isOpen,  onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");

  return (
    <>
      <Modal backdrop={"blur"} isOpen={props.isOpen} onClose={props.onClose}>
        <ModalContent>
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                 {props.msg}
                </p>
               
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={props.onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
        </ModalContent>
      </Modal>
    </>
  );
}
