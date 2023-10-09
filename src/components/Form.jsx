import Link from 'next/link';

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="flex-col w-full max-w-full flex-start">
      <h1 className="text-left head_text blue_gradient">{type} Post</h1>

      <p className="max-w-md text-left desc">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-Powered platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-2xl my-10 gap-7 glassmorphism"
      >
        <label
          htmlFor="prompt"
          className="text-base font-semibold text-gray-700 font-satoshi"
        >
          Prompt
        </label>
        <textarea
          cols="50"
          rows="5"
          value={post.prompt}
          onChange={(e) => setPost({ ...post, prompt: e.target.value })}
          placeholder="Escribe tu prompt aquí .."
          className="form_textarea"
          required
        ></textarea>

        <label
          htmlFor="prompt"
          className="text-base font-semibold text-gray-700 font-satoshi"
        >
          TAG
          <span className="font-normal">
            {' '}
            (#productos, #prueba #desarrollo)
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="Escribe tu tag aquí .."
            className="form_input"
            required
          />
        </label>

        <div className="gap-4 mx-3 mb-5 flex-end">
          <Link href="/" className="text-sm text-gray-500">
            Cancelar
          </Link>
          <button
            type="submit"
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            disabled={submitting}
          >
            {submitting ? `${type}...` : `${type}`}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
