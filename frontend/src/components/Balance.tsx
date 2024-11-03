

const Balance = ({ balance } : Balance) => {
    return (
        <section className="mt-4">
            <div className="flex flex-col items-start">
               <h3>
                Your Balance
               </h3>
              <span className="text-3xl" > ${ balance } </span> 
            </div>

        </section>
    )
}

export default Balance
