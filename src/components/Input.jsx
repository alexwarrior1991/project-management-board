export default function Input({label, textarea, ...props}) {

    return (
        <p>
            <label></label>
            {textarea ? <textarea {...props}/> : <input {...props}/>}
        </p>
    );
}