// Dynamically import modules, so they can be reset between test runs
// https://github.com/facebook/jest/issues/3236
// https://www.npmjs.com/package/babel-plugin-dynamic-import-node
let getBotReply;

beforeEach(() => {
  return import("../Submission/script").then((module) => {
    getBotReply = module.getBotReply;
    jest.resetModules();
  });
});

describe("getBotReply", () => {
  it("should reply with second question", () => {
    const botReply1 = getBotReply("Christian");
    const expectedReply1 =
      "Hello Christian. Does your fish have any unusual colours, growths or damage?";
    expect(botReply1).toEqual(expectedReply1);
  });
});

describe("getBotReply", () => {
  it("reset question should reply with initial question", () => {
    const botReply1 = getBotReply("can you reset?");
    const expectedReply1 = "Hello human! What is your name?";
    expect(botReply1).toEqual(expectedReply1);
  });
});

describe("getBotReply", () => {
  it("should reply with yes and yes outputs, left path", () => {
    const botReply1 = getBotReply("Christian");
    const expectedReply1 =
      "Hello Christian. Does your fish have any unusual colours, growths or damage?";
    expect(botReply1).toEqual(expectedReply1);
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Thanks for the answer Christian. Does the fish have spots of any colour or fuzzy areas?";
    expect(botReply2).toEqual(expectedReply2);
    const botReply3 = getBotReply("yes");
    const expectedReply3 =
      "Please buy some Wunder-Tonic from your local fish store and follow the directions on the bottle to dose the tank.";
    expect(botReply3).toEqual(expectedReply3);
  });
});

describe("getBotReply", () => {
  it("should reply with no and no outputs, right path", () => {
    const botReply1 = getBotReply("Christian");
    const expectedReply1 =
      "Hello Christian. Does your fish have any unusual colours, growths or damage?";
    expect(botReply1).toEqual(expectedReply1);
    const botReply2 = getBotReply("no");
    const expectedReply2 =
      "Thanks for the answer Christian. Are you able to test your aquarium water for ammonia?";
    expect(botReply2).toEqual(expectedReply2);
    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "If you don't have a test kit, please take a minimum 30ml sample of your aquarium water to your local fish store. They can test it for you and tell you the results!";
    expect(botReply3).toEqual(expectedReply3);
  });
});

describe("getBotReply", () => {
  it("should reply with no and no outputs, right path", () => {
    const botReply1 = getBotReply("Christian");
    const expectedReply1 =
      "Hello Christian. Does your fish have any unusual colours, growths or damage?";
    expect(botReply1).toEqual(expectedReply1);
    const botReply2 = getBotReply("no");
    const expectedReply2 =
      "Thanks for the answer Christian. Are you able to test your aquarium water for ammonia?";
    expect(botReply2).toEqual(expectedReply2);
    const botReply3 = getBotReply("yes");
    const expectedReply3 =
      "If your ammonia is above zero please perform a 60 percent water change on your aquarium and check that your filter is running.";
    expect(botReply3).toEqual(expectedReply3);
  });
});
