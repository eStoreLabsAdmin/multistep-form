import React from "react";
import { useMultiStepForm } from "../hooks/useMultiStepForm";
import { Button } from "react-bootstrap";

export const CreateUser: React.FC = () => {
  const { steps, currentStepIndex, step, isFirstStep, back, next } =
    useMultiStepForm([<div>One</div>, <div>Two</div>]);
  return (
    <>
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
            <Button type="button" onClick={next}>
              Next
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
