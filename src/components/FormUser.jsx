import { useEffect } from "react";
import { useForm } from "react-hook-form";
import './styles/FormUser.css'

const FormUser = ({
  createNewUser,
  updateInfo,
  updateUserById,
  setUpdateInfo,
  closeForm,
  setCloseForm
}) => {


  const { register, reset, handleSubmit } = useForm();

  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  const submit = (data) => {
    if (updateInfo) {
      //Update
      updateUserById("/users", updateInfo.id, data);
      setUpdateInfo();
    } else {
      //Create
      createNewUser("/users", data);
    }
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
    });
  };

  const handleCloseForm = () => {
    setCloseForm(true)
  }

  return (
    <div onClick={handleCloseForm} className={`formuser-container ${closeForm && 'close-form'}`}>
      <form onClick={e => e.stopPropagation()} className="formuser" onSubmit={handleSubmit(submit)}>
        <h2 className="formuser__title">{updateInfo ? "Update User" : "Create New User"}</h2>
        <div onClick={handleCloseForm} className="formuser__close">x</div>
        <div className="formuser__group">
          <p>This fields are required: <span className="field_req">*</span></p>
          <label className="formuser__label" htmlFor="first_name">
            First Name<span className="field_req">*</span>
          </label>
          <input
            className="formuser__input"
            {...register("first_name", { required: true })}
            type="text"
            id="first_name"
            placeholder="Blue Label"
          />
        </div>
        <div className="formuser__group">
          <label className="formuser__label" htmlFor="last_name">
            Last Name
          </label>
          <input
            className="formuser__input"
            {...register("last_name")}
            type="text"
            id="last_name"
            placeholder="Perez Perez"
          />
        </div>
        <div className="formuser__group">
          <label className="formuser__label" htmlFor="email">
            Email<span className="field_req">*</span>
          </label>
          <input
            className="formuser__input"
            {...register("email", { required: true })}
            type="email"
            id="email"
            placeholder="hola123@example.com"
          />
        </div>
        <div className="formuser__group">
          <label className="formuser__label" htmlFor="password">
            Password<span className="field_req">*</span>
          </label>
          <input
            className="formuser__input"
            {...register("password", { required: true })}
            type="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="formuser__group">
          <label className="formuser__label" htmlFor="birthday">
            Birthday
          </label>
          <input
            className="formuser__input"
            {...register("birthday")}
            type="date"
            id="birthday"
          />
        </div>
        <button className="formuser__btn">{updateInfo ? "Update this user" : "Add a new user"}</button>
      </form>
    </div>
  );
};

export default FormUser;
