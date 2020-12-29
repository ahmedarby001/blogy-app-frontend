import './style.scss';
import $ from 'jquery';
import { withRouter, NextRouter } from 'next/router';



interface Props {
   router: NextRouter
}

function LoginPage(props: Props) {

   const onSubmit = (e: any) => {
      e.preventDefault()

      const email = $('#email_input');
      const pass = $('#pass_input');

      // Email validation
      if(!email.val()) {
         email.addClass('is-invalid');
         $('#email_err').text('Please enter yor E-mail or Username');
      } else {
         email.removeClass('is-invalid');
         email.addClass('is-valid');
         $('#email_err').text('');
      }
      // Password validation
      if(!pass.val()) {
         pass.addClass('is-invalid');
         $('#pass_err').text('Please enter yor password');
      } else {
         pass.removeClass('is-invalid');
         pass.addClass('is-valid');
         $('#pass_err').text('');
      }

      if(!email.val() || !pass.val()) {
         $('form').removeClass('was-validated');
         return
      } else {
         $('form').addClass('was-validated');
      }

      // Done
      props.router.push('/');

   }

   return(
     <div className="container">
        <div className="raw content col-auto col-sm-auto col-md-7">
            <form>
               <div className="mb-3">
                  <label htmlFor="email_input" className="form-label">Email address or Username</label>
                  <input type="text" className="form-control" id="email_input" aria-describedby="email_help" />
                  <div id="email_err" className="form-text invalid-feedback"></div>
               </div>
               <div className="mb-3">
                  <label htmlFor="pass_input" className="form-label">Password</label>
                  <input type="password" className="form-control" id="pass_input" />
                  <div id="pass_err" className="form-text invalid-feedback"></div>
               </div>
               <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="check_input" />
                  <label className="form-check-label" htmlFor="check_input">Remember me</label>
               </div>
               <button type="submit" className="btn btn-primary" onClick={ onSubmit }>Submit</button>
            </form>
         </div>
     </div>
   );
}

export default withRouter(LoginPage);
