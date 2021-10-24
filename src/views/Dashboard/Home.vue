<template>
  <div>
    <h1>Dashboard</h1>
  </div>

  <div class="card-group mt-3">
    <div class="card mb-3" style="max-width: 18rem">
      <div class="card-header text-white bg-primary">Milestones</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Hash Rate: 5.5K</li>
      </ul>
    </div>
    <div class="card mb-3" style="max-width: 18rem">
      <div class="card-header text-white bg-success">P/L</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Weekly: <a href="#">$588</a></li>
        <li class="list-group-item">Monthly: <a href="#">$5088</a></li>
        <li class="list-group-item">YTD: <a href="#">$11898</a></li>
      </ul>
    </div>
    <div class="card mb-3" style="max-width: 18rem">
      <div class="card-header text-white bg-danger">Warnings</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          ASIC miner offline <a href="#">957293</a>
        </li>
        <li class="list-group-item">
          ASIC miner offline <a href="#">53498</a>
        </li>
        <li class="list-group-item">
          ASIC miner overheat <a href="#">53498</a>
        </li>
      </ul>
    </div>
    <div class="card mb-3" style="max-width: 18rem">
      <div class="card-header text-white bg-dark">Header</div>
      <div class="card-body">
        <h5 class="card-title">Dark card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  </div>

  <div class="mt-3">
    <h2>Mining</h2>
    <div class="card-group">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">ASIC</h5>
        </div>
        <table class="card-table table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Last Month</th>
              <th scope="col">Last Week</th>
              <th scope="col">This Week</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col">Uptime</th>
              <td>87%</td>
              <td>92%</td>
              <td>95%</td>
            </tr>
            <tr>
              <th scope="col">Hash</th>
              <td>4.7K</td>
              <td>5.2K</td>
              <td>5.5K</td>
            </tr>
            <tr>
              <th>Yield</th>
              <td>$3.9K</td>
              <td>$4.3K</td>
              <td>$4.9K</td>
            </tr>
            <tr>
              <th>P/L</th>
              <td>$0.9K</td>
              <td>$1.3K</td>
              <td>$2.9K</td>
            </tr>
          </tbody>
        </table>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">GPU</h5>
        </div>
        <table class="card-table table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Last Month</th>
              <th scope="col">Last Week</th>
              <th scope="col">This Week</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col">Uptime</th>
              <td>87%</td>
              <td>92%</td>
              <td>95%</td>
            </tr>
            <tr>
              <th scope="col">Hash</th>
              <td>4.7K</td>
              <td>5.2K</td>
              <td>5.5K</td>
            </tr>
            <tr>
              <th>Yield</th>
              <td>$3.9K</td>
              <td>$4.3K</td>
              <td>$4.9K</td>
            </tr>
            <tr>
              <th>P/L</th>
              <td>$0.9K</td>
              <td>$1.3K</td>
              <td>$2.9K</td>
            </tr>
          </tbody>
        </table>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-3">
    <h2>CeFi Trading</h2>
    <div class="card-group">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Intra-day</h5>
        </div>
        <table class="card-table table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Last Month</th>
              <th scope="col">Last Week</th>
              <th scope="col">This Week</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Win Rate</th>
              <td>76%</td>
              <td>75%</td>
              <td>86%</td>
            </tr>

            <tr>
              <th>Trades</th>
              <td>13</td>
              <td>19</td>
              <td>14</td>
            </tr>
            <tr>
              <th>P/L</th>
              <td>$0.9K</td>
              <td>$1.3K</td>
              <td>$2.9K</td>
            </tr>
          </tbody>
        </table>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Swing</h5>
        </div>
        <table class="card-table table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Last Month</th>
              <th scope="col">Last Week</th>
              <th scope="col">This Week</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Win Rate</th>
              <td>76%</td>
              <td>75%</td>
              <td>86%</td>
            </tr>

            <tr>
              <th>Trades</th>
              <td>13</td>
              <td>19</td>
              <td>14</td>
            </tr>
            <tr>
              <th>P/L</th>
              <td>$0.9K</td>
              <td>$1.3K</td>
              <td>$2.9K</td>
            </tr>
          </tbody>
        </table>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Long term</h5>
        </div>
        <table class="card-table table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Last Month</th>
              <th scope="col">Last Week</th>
              <th scope="col">This Week</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Win Rate</th>
              <td>76%</td>
              <td>75%</td>
              <td>86%</td>
            </tr>

            <tr>
              <th>Trades</th>
              <td>13</td>
              <td>19</td>
              <td>14</td>
            </tr>
            <tr>
              <th>P/L</th>
              <td>$0.9K</td>
              <td>$1.3K</td>
              <td>$2.9K</td>
            </tr>
          </tbody>
        </table>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-3">
    <h2>DeFi Trading</h2>
    <div class="card-group">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Intra-day</h5>
          <a
            href="http://localhost:3000/dashboard/chain"
            class="btn btn-primary"
            >Explore</a
          >
        </div>
        <table class="card-table table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Last Month</th>
              <th scope="col">Last Week</th>
              <th scope="col">This Week</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Win Rate</th>
              <td>76%</td>
              <td>75%</td>
              <td>86%</td>
            </tr>

            <tr>
              <th>Trades</th>
              <td>13</td>
              <td>19</td>
              <td>14</td>
            </tr>
            <tr>
              <th>P/L</th>
              <td>$0.9K</td>
              <td>$1.3K</td>
              <td>$2.9K</td>
            </tr>
          </tbody>
        </table>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Swing</h5>
          <a
            href="http://localhost:3000/dashboard/chain"
            class="btn btn-primary"
            >Explore</a
          >
        </div>
        <table class="card-table table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Last Month</th>
              <th scope="col">Last Week</th>
              <th scope="col">This Week</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Win Rate</th>
              <td>76%</td>
              <td>75%</td>
              <td>86%</td>
            </tr>

            <tr>
              <th>Trades</th>
              <td>13</td>
              <td>19</td>
              <td>14</td>
            </tr>
            <tr>
              <th>P/L</th>
              <td>$0.9K</td>
              <td>$1.3K</td>
              <td>$2.9K</td>
            </tr>
          </tbody>
        </table>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Farming</h5>
          <a
            href="http://localhost:3000/dashboard/chain"
            class="btn btn-primary"
            >Explore</a
          >
        </div>
        <table class="card-table table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Last Month</th>
              <th scope="col">Last Week</th>
              <th scope="col">This Week</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Win Rate</th>
              <td>76%</td>
              <td>75%</td>
              <td>86%</td>
            </tr>

            <tr>
              <th>Trades</th>
              <td>13</td>
              <td>19</td>
              <td>14</td>
            </tr>
            <tr>
              <th>P/L</th>
              <td>$0.9K</td>
              <td>$1.3K</td>
              <td>$2.9K</td>
            </tr>
          </tbody>
        </table>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-3">
    <h2>Bots</h2>
    <div class="card-group">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">PolyArb</h5>
        </div>
        <table class="card-table table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Last Month</th>
              <th scope="col">Last Week</th>
              <th scope="col">This Week</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col">Uptime</th>
              <td>87%</td>
              <td>92%</td>
              <td>95%</td>
            </tr>
            <tr>
              <th>Win Rate</th>
              <td>76%</td>
              <td>75%</td>
              <td>86%</td>
            </tr>

            <tr>
              <th>Trades</th>
              <td>13</td>
              <td>19</td>
              <td>14</td>
            </tr>
            <tr>
              <th>P/L</th>
              <td>$0.9K</td>
              <td>$1.3K</td>
              <td>$2.9K</td>
            </tr>
          </tbody>
        </table>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Arb Multichain</h5>
        </div>
        <table class="card-table table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Last Month</th>
              <th scope="col">Last Week</th>
              <th scope="col">This Week</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col">Uptime</th>
              <td>87%</td>
              <td>92%</td>
              <td>95%</td>
            </tr>
            <tr>
              <th>Win Rate</th>
              <td>76%</td>
              <td>75%</td>
              <td>86%</td>
            </tr>

            <tr>
              <th>Trades</th>
              <td>13</td>
              <td>19</td>
              <td>14</td>
            </tr>
            <tr>
              <th>P/L</th>
              <td>$0.9K</td>
              <td>$1.3K</td>
              <td>$2.9K</td>
            </tr>
          </tbody>
        </table>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Yield Balancer</h5>
        </div>
        <table class="card-table table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Last Month</th>
              <th scope="col">Last Week</th>
              <th scope="col">This Week</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col">Uptime</th>
              <td>87%</td>
              <td>92%</td>
              <td>95%</td>
            </tr>
            <tr>
              <th>Win Rate</th>
              <td>76%</td>
              <td>75%</td>
              <td>86%</td>
            </tr>

            <tr>
              <th>Trades</th>
              <td>13</td>
              <td>19</td>
              <td>14</td>
            </tr>
            <tr>
              <th>P/L</th>
              <td>$0.9K</td>
              <td>$1.3K</td>
              <td>$2.9K</td>
            </tr>
          </tbody>
        </table>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  </div>
</template>