How the Resolute Quant case study visuals were made

demo_server.py     Serves the terminal's real front end with fictional instruments and generated
                   prices, a visible banner, and provider names replaced. It contacts no provider.
capture.mjs        Takes the screenshots from that server with headless Edge.
simulate_folds.py  Produces the numbers for the 3D chart: the planned evaluation method run on
                   simulated returns only, with a fixed seed.

No market data is used, because the data providers' terms do not allow public display of their
data or anything derived from it. These visuals show the interface and the method. They are not
results, and they say nothing about any real market or model.
