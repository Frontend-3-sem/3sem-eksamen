const base =
  "absolute aspect-square h-8 md:h-14 bg-accent1 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100";

export function Corners() {
  return (
    <>
      <span
        aria-hidden
        className={`${base} left-0 top-0 -translate-x-4 -translate-y-4 [clip-path:polygon(0_0,100%_0,0_100%)]`}
      />
      <span
        aria-hidden
        className={`${base} bottom-0 right-0 translate-x-4 translate-y-4 [clip-path:polygon(0_100%,100%_0,100%_100%)]`}
      />
    </>
  );
}
