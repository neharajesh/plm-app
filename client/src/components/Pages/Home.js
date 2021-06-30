export const Home = () => {
    return (<>
        <div className="pageContainer">
            <h1> Home </h1>
            <h2 className="mg-t-1"> Welcome to PETCARE, your Personal Learning Management Application! </h2>
            <p className="mg-05 w-75 mg-b-1"> PETCARE is an application you can use to manage everything related to your pet. Manage all your todos, check out articles related to pet care and management, and more!  </p>
            
            <br />

            <h2 className="mg-t-1"> What can you do here? </h2>
            <ol className="mg-1 mg-b-2"> 
                <li className="mg-05"> Add your Todo lists </li>
                <li className="mg-05"> Discover articles related to Pet Care </li>
                <p className="mg-05"> Coming soon, A Notes Feature to take down notes from Articles!  </p>
            </ol>

            <br />

            <p className="mg-05 w-75 txt-l"> Saw something interesting and you're wondering where to buy it? Check out PETMART, your one stop shop for all your pet's needs! </p>

        </div>
    </>)
}