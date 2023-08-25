import React from "react";
import { Link } from "react-router-dom";
import { useMultiStepForm } from "../hooks/useMultiStepForm";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { UserData } from "../components/form/UserData";
import { UserPlan } from "../components/form/UserPlan";
import { UserOptions } from "../components/form/UserOptions";

export const CreateUser: React.FC = () => {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([<UserData />, <UserPlan />, <UserOptions />]);

  function onSubmit() {
    console.log("form submitted");
  }
  return (
    <>
      <Link to={"/"}>
        <FontAwesomeIcon className="fa-solid" icon={faAnglesLeft} />
      </Link>
      <p>this is create user page.</p>
      <div className="position-relative shadow p-3 mb-5 bg-white rounded p-4">
        <form>
          <div className="position-absolute top-0 end-0">
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div className="m-2 d-flex justify-content-between">
            {!isFirstStep && (
              <Button
                className="btn btn-secondary"
                type="button"
                onClick={back}
              >
                Prev
              </Button>
            )}
            {isLastStep ? (
              <Button
                className="btn btn-primary"
                type="button"
                onClick={onSubmit}
              >
                Submit
              </Button>
            ) : (
              <Button className="btn btn-primary" type="button" onClick={next}>
                Next
              </Button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};
