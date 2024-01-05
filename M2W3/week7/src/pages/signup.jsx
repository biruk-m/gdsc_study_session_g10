import "./Signup.css";
export default function Signup() {
    return (
      <div className="login-container">
        <h1>Signup</h1>
        <h2>Welcome Back!</h2>
        <form>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Log In</button>
        </form>
        <p>Or Log In With</p>
        <a href="#" class="google-btn">Google</a>
        <p><a href="#">Forget Password?</a></p>



        <a className="back" href="/">Back to home</a>

      </div>
    );
  }