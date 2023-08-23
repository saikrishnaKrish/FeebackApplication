    import { useRouteError } from "react-router-dom";

    
    const ErrorPage = () => {
        const error= useRouteError();
        console.log
      return (
       <div id="error-page">
            <h1>OOPs!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>

                    <i>{error.statusText || error.message}</i>
                </i>
            </p>
       </div>
      )
    }
    
    export default ErrorPage