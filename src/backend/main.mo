import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";

actor {
  // Data Types
  type BusinessInfo = {
    name : Text;
    address : Text;
    phone : Text;
    facebook : Text;
    instagram : Text;
  };

  type MenuItem = {
    name : Text;
    price : Nat;
    description : Text;
    badge : ?Text;
  };

  type MenuCategory = {
    title : Text;
    items : [MenuItem];
  };

  type SpecialOffer = {
    title : Text;
    description : Text;
  };

  // Persistent Storage
  var businessInfo : BusinessInfo = {
    name = "Tasty Tower";
    address = "Somewhere in Vizag";
    phone = "1234567890";
    facebook = "";
    instagram = "";
  };

  var specialOffer : SpecialOffer = {
    title = "No discount, sorry!";
    description = "We only offer high prices";
  };

  let menuCategories = Map.empty<Text, MenuCategory>();

  // Initialization
  public shared ({ caller }) func initializeMenu() : async () {
    if (menuCategories.size() > 0) { Runtime.trap("Menu already initialized") };

    let juices : MenuCategory = {
      title = "Juices";
      items = [
        {
          name = "Orange Juice";
          price = 50;
          description = "Fresh orange juice";
          badge = ?"Popular";
        },
        {
          name = "Apple Juice";
          price = 45;
          description = "Fresh apple juice";
          badge = null;
        },
      ];
    };

    let milkshakes : MenuCategory = {
      title = "Milkshakes";
      items = [
        {
          name = "Chocolate Shake";
          price = 70;
          description = "Rich chocolate flavor";
          badge = ?"New";
        },
      ];
    };

    menuCategories.add("juices", juices);
    menuCategories.add("milkshakes", milkshakes);
  };

  // Query Functions
  public query ({ caller }) func getBusinessInfo() : async BusinessInfo {
    businessInfo;
  };

  public query ({ caller }) func getSpecialOffer() : async SpecialOffer {
    specialOffer;
  };

  public query ({ caller }) func getMenuCategory(category : Text) : async MenuCategory {
    switch (menuCategories.get(category)) {
      case (null) {
        Runtime.trap("Category not found");
      };
      case (?cat) { cat };
    };
  };

  public query ({ caller }) func getAllCategories() : async [MenuCategory] {
    menuCategories.values().toArray();
  };

  // Update Functions (Admin only)
  public shared ({ caller }) func updateBusinessInfo(newInfo : BusinessInfo) : async () {
    businessInfo := newInfo;
  };

  public shared ({ caller }) func updateSpecialOffer(newOffer : SpecialOffer) : async () {
    specialOffer := newOffer;
  };

  public shared ({ caller }) func updateMenuCategory(category : Text, newCategory : MenuCategory) : async () {
    menuCategories.add(category, newCategory);
  };
};
