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
  return (
    <>
      <Link to={"/"}>
        <FontAwesomeIcon className="fa-solid" icon={faAnglesLeft} />
      </Link>
      <p>this is create user page.</p>
      <div
        style={{
          position: "relative",
          border: "2px solid black",
          padding: "20px",
        }}
      >
        <form>
          <div style={{ position: "absolute", top: "0", right: "0" }}>
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {!isFirstStep && (
              <Button type="button" onClick={back}>
                Prev
              </Button>
            )}
            {isLastStep ? (
              <Button type="button">Submit</Button>
            ) : (
              <Button type="button" onClick={next}>
                Next
              </Button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};
