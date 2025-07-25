---
date: 2025-06-08
title: Rust everywhere
categories:
  - Rust
  - Python
links:
  - Just: https://github.com/casey/just
  - maturin: https://github.com/PyO3/maturin
  - Pydantic v2: https://docs.pydantic.dev/latest/
  - PyO3: https://pyo3.rs
  - Rust: https://www.rust-lang.org
  - Ruff: https://github.com/astral-sh/ruff
  - uv: https://github.com/astral-sh/uv
  - Zed: https://zed.dev
---

# Rust appears everywhere

Yesterday I came along Just in a project and figured out a nice task runner like Makefile. Reading the README I noticed it is written in Rust. That happens all the time for a few months: Rust appears everywhere in my developer eco system. Project manager uv is ultra fast, pydantic v2 core rewritten in rust for performance, ruff  as linter and code formatter, my new editor Zed is super sleek and fast, and that is just what I am directly aware of, what about Rust? I need to hello world into it.

<!-- more -->

```zsh
➜  rust0 git:(master) ✗ cargo run
   Compiling rust0 v0.1.0 (/Users/matthias/mr/rust0)
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.30s
     Running `target/debug/rust0`
 __________________________
< Hello fellow Rustaceans! >
 --------------------------
        \
         \
            _~^~^~_
        \) /  o o  \ (/
          '_   -   _'
          / '-----' \
```

## Blazingly fast

Rust delivers C-level speed with memory safety and modern tooling. It compiles to highly optimized native code, and thanks to its strict ownership model, avoids common bugs around memory access and thread safety. Once a library author has that performance and safety in place, making it available to Python developers is surprisingly smooth. With tools like maturin, shipping a Rust library as a pre-compiled Python wheel is straightforward. End-users still just run pip install, but behind the scenes, they’re getting native performance.

This approach keeps the development and distribution experience familiar for Python developers, while unlocking the low-level speed benefits typically reserved for C or C++ extensions—without the frustration of dealing directly with those ecosystems. Rust's package ecosystem, strong type system, and excellent compiler feedback loop make the development side productive too.

## Solid integration

But the real magic happens at the interface. Using PyO3, Rust functions and modules can be exposed to Python as if they were native modules. With just a few lines of Rust code, you can define a function, decorate it with #[pyfunction], and expose it in a Python-friendly module using #[pymodule]. The result is a shared library that behaves like any other Python module but runs much faster and often several times faster than equivalent Python code, and in some cases, even outperforming C extensions.

So ultimately, it's all about performance and integration. The question isn't just "how fast is it," but also "how well does it fit into Python projects?" And on that front, Rust delivers. You can embed Python into Rust or call Rust from Python. PyO3 handles the translation layer between Python objects and Rust types, and the compiled result often resembles a classic C-extension from Python’s perspective is exactly what many existing tools expect.

The adoption rate of Rust for Python interoperability has been growing rapidly. According to the maintainers of PyO3 and maturin, the number of Rust-powered Python packages is doubling year over year[^1]. That momentum is driven not just by the promise of speed, but by the fact that the integration actually works, and works well even for small projects.

### Calling Python from Rust

Just extending the example project to execute python from rust code. See [running python in rust](https://github.com/rebeling/rust0){:target="_blank"} examples/python_from_rust.rs.

```shell
Hello matthias, I'm Python 3.11.0 (main, Jun  7 2023, 14:42:41) [Clang 14.0.3 (clang-1403.0.22.14.1)]
```

### Calling Rust from Python

And what about vice versa in python executing Rust, a bit more setup and dive into but with maturin project setup. See [running rust in python](https://github.com/rebeling/rust1){:target="_blank"} the basic example sum two values input was 1 and 2. The example is autogenerated with maturin.

```rs title="src/lib.rs"
use pyo3::prelude::*;

/// Formats the sum of two numbers as string.
#[pyfunction]
fn sum_as_string(a: usize, b: usize) -> PyResult<String> {
    Ok((a + b).to_string())
}

/// A Python module implemented in Rust.
#[pymodule]
fn rust1(m: &Bound<'_, PyModule>) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(sum_as_string, m)?)?;
    Ok(())
}
```

```py title="main.py"
import rust1

print(rust1.sum_as_string(1, 2))
```

```zsh
(rust1) ➜  rust1 git:(main) ✗ python main.py
3
```

## Rust up

Rust keeps cropping up in the Python ecosystem because it delivers C-level speed and often more. Tools like uv, Pydantic v2 and Zed have already proved the point in day-to-day work, so moving one performance-critical loop to Rust felt like the next logical step.

That “compiles, installs, and runs first time” experience was pretty good. Nothing derailed momentum, so the focus stayed on measuring the improvement rather than fighting the toolchain.

The takeaway is simple. If you have a hot path that pure Python can’t handle, porting just that slice to Rust seems to be a low-risk, high-reward move. With PyO3 and maturin the language boundary is thin, and once the basic example works, sky is the limit. Rust in Python, is already a solid option for the parts where every millisecond counts.


[^1]: [PyO3: From Python to Rust and Back Again (Kris Jankins, David Hewitt)](https://www.youtube.com/watch?v=UmL_CA-v3O8){:target="_blank"}
