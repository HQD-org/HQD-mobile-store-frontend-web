import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { changePasswordAction } from "../../../redux/actions/Auth/authActions";
import { useDispatch } from "react-redux";
import { validateChangePassword } from "../hooks/validate";

const ChangePassword = (props) => {
  const dispatch = useDispatch();
  const { modal, toggle } = props;

  const onToggle = () => {
    toggle(false);
  };

  const changePassword = async (e) => {
    e.preventDefault();
    const data = {
      oldPassword: e.target.oldPassword.value,
      newPassword: e.target.newPassword.value,
      confirmPassword: e.target.confirmPassword.value,
    };
    const isValidData = validateChangePassword(data);
    if (!isValidData) return;
    const res = await dispatch(
      changePasswordAction({
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      })
    );
    if (res) onToggle();
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={onToggle}>
        <ModalHeader style={{ color: "#3FA5EF" }}>Change Password</ModalHeader>
        <ModalBody>
          <form onSubmit={changePassword}>
            <div>
              <div className="mb-3">
                <label>Current Password</label>
                <input
                  type="password"
                  className="form-control mb-3"
                  name={"oldPassword"}
                />
              </div>
              <div className="mb-3">
                <label>New Password</label>
                <input
                  type="password"
                  className="form-control mb-3"
                  name={"newPassword"}
                />
              </div>
              <div className="mb-3">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control mb-3"
                  name={"confirmPassword"}
                />
              </div>
            </div>
            <ModalFooter>
              <Button type="submit" color="primary">
                Change Password
              </Button>
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
