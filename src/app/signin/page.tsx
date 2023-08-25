import SignInForm from "@/components/view/SignInForm";
import ContextWrapper from "@/global/context";

const SignIn = () => {
  return (
    <ContextWrapper>
      <SignInForm />
    </ContextWrapper>
  );
};

export default SignIn;
