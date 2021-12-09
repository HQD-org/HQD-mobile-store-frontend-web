import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const ChangePassword = (props) => {
  const { modal, toggle } = props;

  const onToggle = () => {
    toggle(false);
  };
  return (
    <div>
      {" "}
      <Modal isOpen={modal} toggle={onToggle}>
        <ModalHeader style={{ color: "#3FA5EF" }}>Change Password</ModalHeader>
        <ModalBody>
          <form>
            <div>
              <div className="mb-3">
                <label>Current Password</label>
                <input type="password" class="form-control mb-3" />
              </div>
              <div className="mb-3">
                <label>New Password</label>
                <input type="password" class="form-control mb-3" />
              </div>
              <div className="mb-3">
                <label>Confirm Password</label>
                <input type="password" class="form-control mb-3" />
              </div>
            </div>
            <ModalFooter>
              <Button type="submit" color="primary">
                Change Password
              </Button>{" "}
              <Button type="button" color="secondary" onClick={onToggle}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default ChangePassword;
