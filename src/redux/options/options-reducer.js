const INITIAL_STATE = {
  availableOptions: [
    {
      title: "Hourly payment",
      isInverted: false,
      price: "1$ - hour",
      available: ["Games catalog", "Virtual PC", "Unlimited gaming session"],
    },
    {
      title: "Maximum subscribtion",
      isInverted: true,
      price: "30$ - month",
      available: [
        "Games catalog",
        "Virtual PC",
        "10 hour per day gaming session",
      ],
    },
    {
      title: "Minimum subscribtion",
      isInverted: false,
      price: "15$ - month",
      available: ["Games catalog", "4 hour per day gaming session"],
    },
  ],
};

const OptionsReducer = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default OptionsReducer;
