import SignupFormComp from "@/components/view/Signup";
import ContextWrapper from "@/global/context";

const SignupForm = () => {
  return (
    <ContextWrapper>
      <SignupFormComp />
    </ContextWrapper>
  );
};

export default SignupForm;
