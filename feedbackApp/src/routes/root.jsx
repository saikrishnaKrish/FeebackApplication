import { Outlet, Link,useLoaderData } from "react-router-dom";
import { getContacts } from "../contacts.js";


export async function loader() {
    const contacts = await getContacts();
    return { contacts };
  }

const Root = () => {
    const { contacts } = useLoaderData();
  return (
    <div id="sidebar">
        <nav>
        {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}

        </nav>
        <Outlet/>
    </div>
  )
}

export default Root