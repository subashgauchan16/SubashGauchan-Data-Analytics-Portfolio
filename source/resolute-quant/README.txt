How the Resolute Quant case study visuals were made

demo_server.py     Serves the terminal's real front end with fictional instruments and generated
                   prices, a visible banner, and provider names replaced. It contacts no provider.
capture.mjs        Takes the screenshots from that server with headless Edge.
demo_workspace.py  Runs the newer research workspace for the screenshots added in November 2026. It
                   imports the terminal's own backend code from the private Resolute Quant checkout
                   and feeds it prices generated from a seeded random walk, for fictional companies.
                   An audit hook refuses to open saved market data, research results, keys or
                   settings, and panels that need saved results show invented placeholders or say
                   they are unavailable. Nothing is fetched from a provider and no model is called.
capture_workspace.mjs  Takes those four screenshots with headless Edge:
                   node capture_workspace.mjs <python.exe> <private checkout> <output folder>
simulate_folds.py  Produces the numbers for the 3D chart: the planned evaluation method run on
                   simulated returns only, with a fixed seed.

No market data is used, because the data providers' terms do not allow public display of their
data or anything derived from it. These visuals show the interface and the method. They are not
results, and they say nothing about any real market or model.
