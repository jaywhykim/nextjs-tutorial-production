"use client";
import { useFormStatus, useFormState } from "react-dom";
import { createTaskCustom } from "@/utils/actions";
import { useEffect } from "react";
import toast from "react-hot-toast";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? "please wait..." : "create task"}
    </button>
  );
};

const initialState = {
  message: null,
};

const TaskForm = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);
  useEffect(() => {
    if (state.message === "error") {
      toast.error("There was an error (min. 5 letters)");
      return;
    }
    if (state.message) {
      toast.success("Task created");
    }
  }, [state]);
  return (
    <form action={formAction}>
      {/*state.message ? <p className="mb-2">{state.message}</p> : null*/}
      <div className="join w-full">
        <input
          type="text "
          className="input input-borded join-item w-full border border-gray-400"
          placeholder="type here"
          name="content"
          required
        />
        <SubmitBtn />
      </div>
    </form>
  );
};

export default TaskForm;
