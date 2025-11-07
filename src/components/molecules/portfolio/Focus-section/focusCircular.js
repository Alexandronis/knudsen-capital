import React from 'react';

function FocusCircular() {
  return (
    <>
      <div className="selector">
        <ul>
          <li>
            <input id="1" type="checkbox" />
            <label
              for="1"
              style={{
                transform: 'rotate(0deg)',
              }}
            >
              Health related
            </label>
          </li>
          <li>
            <input id="2" type="checkbox" />
            <label
              for="2"
              style={{
                transform: 'rotate(-45deg)',
              }}
            >
              Supplements
            </label>
          </li>
          <li>
            <input id="3" type="checkbox" />
            <label
              for="3"
              style={{
                transform: 'rotate(-90deg)',
              }}
            >
              Protein
            </label>
          </li>
          <li>
            <input id="4" type="checkbox" />
            <label
              for="4"
              style={{
                transform: 'rotate(-135deg)',
              }}
            >
              Plant-based
            </label>
          </li>
          <li>
            <input id="5" type="checkbox" />
            <label
              for="5"
              style={{
                transform: 'rotate(-180deg)',
              }}
            >
              Good for you
            </label>
          </li>
          <li>
            <input id="6" type="checkbox" />
            <label
              for="6"
              style={{
                transform: 'rotate(-225deg)',
              }}
            >
              Clean formulations
            </label>
          </li>
          <li>
            <input id="7" type="checkbox" />
            <label
              for="7"
              style={{
                transform: 'rotate(-270deg)',
              }}
            >
              Immunity products
            </label>
          </li>
          <li>
            <input id="8" type="checkbox" />
            <label
              for="8"
              style={{
                transform: 'rotate(-315deg)',
              }}
            >
              Subscriptions
            </label>
          </li>
        </ul>
        <button>
          <img src="/KCLLC_Logo.svg" alt="KC/LLC Logo" />
        </button>
      </div>
    </>
  );
}

export default FocusCircular;
