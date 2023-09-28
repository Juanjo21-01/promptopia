'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { singIn, signOut, useSession, getProviders } from 'next-auth/react';

const Navbar = () => {
  const isUserLogged = true;
  // variables de estado
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProvider = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProvider();
  }, []);

  return (
    <nav className="w-full pt-3 mb-16 flex-between">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      {/* Navegacion en Escritorio */}
      <div className="hidden sm:flex">
        {isUserLogged ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create" className="black_btn ">
              Crear Post
            </Link>

            <button onClick={signOut} className="outline_btn">
              Cerrar Sesión
            </button>

            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                alt="perfil"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => singIn(provider.id)}
                  className="black_btn"
                >
                  Iniciar sesión
                </button>
              ))}
          </>
        )}
      </div>

      {/* Navegacion en Movil */}
      <div className="relative flex sm:hidden">
        {isUserLogged ? (
          <div className="flex gap-3 md:gap-5">
            <Image
              src="/assets/images/logo.svg"
              alt="perfil"
              width={37}
              height={37}
              className="rounded-full cursor-pointer"
              onClick={() => setToggleDropdown((prevState) => !prevState)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Mi Perfil
                </Link>
                <Link
                  href="/create"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Crear Post
                </Link>
                <button
                  className="w-full mt-5 black_btn"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                >
                  Cerrar Sesión
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  key={provider.name}
                  onClick={() => singIn(provider.id)}
                  className="black_btn"
                >
                  Iniciar sesión
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
