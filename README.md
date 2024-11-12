# HomeBase

HomeBase is an innovative real estate platform designed to streamline property transactions, making it easier for buyers and sellers to connect, communicate, and complete secure transactions. The website offers a range of features to enhance the property search and listing experience, providing users with a user-friendly interface and powerful tools.

## Project Description

HomeBase simplifies the process of buying, renting, and selling properties by offering a comprehensive platform for managing property listings and inquiries. Key features include:

- **Property Listings:** Users can create, update, and manage property listings with detailed descriptions, pricing, and property types.
- **Advanced Search Service:** Users can search properties by location, price range, and property type, ensuring they find listings that meet their needs.
- **Inquiry System:** Potential buyers or renters can make inquiries directly to property owners, facilitating direct communication.
- **Secure Transactions:** Integrated payment processing and transaction management ensure secure, hassle-free payments.
- **User Authentication:** The platform includes a secure registration and login system to protect user data and manage access.

HomeBase is a one-stop solution for anyone looking to discover, list, and manage properties efficiently, with features that cater to the needs of both property owners and prospective buyers or renters.

## Team Members

- **Aditya Pimpalkar** - pimpalkar.a@northeastern.edu
- **Atharva Kurlekar** - kurlekar.a@northeastern.edu
- **Diksha Sahare** - sahare.d@northeastern.edu
- **Priyesh Modi** - modi.priyes@northeastern.edu

## Milestones

### Milestone 1: User Authentication and Profile Management

- **Aditya:** User Registration and Login functionality
- **Diksha:** User Profile Update
- **Atharva:** User Role Assignment
- **Priyesh:** Integration of authentication with backend (secure login and registration flow)

### Milestone 2: Property and Listing Management

- **Aditya:** Property Creation
- **Diksha:** Listing Creation
- **Atharva:** Listing Management
- **Priyesh:** Property Type Selection functionality

### Milestone 3: Property Search and Discovery

- **Aditya:** Search functionality by location and price
- **Diksha:** Filtering by property type
- **Atharva:** Backend setup for search queries and filtering
- **Priyesh:** Optimize search UI for better user experience

### Milestone 4: Inquiry and Communication

- **Aditya:** Inquiry Creation
- **Diksha:** Viewing Inquiries
- **Atharva:** Response functionality for property owners
- **Priyesh:** Real-time communication between users and property owners

### Milestone 5: Transaction and Payment Processing

- **Aditya:** Transaction Creation
- **Diksha:** Payment Processing Integration
- **Atharva:** Transaction Cancellation
- **Priyesh:** Transaction History Tracking System

### Milestone 6: Additional Features and Enhancements

- **Aditya:** Feature Listing
- **Diksha:** Adding Property Amenities
- **Atharva:** User Favorites
- **Priyesh:** Search Recommendations and Property Document Upload



### REST API Resources

User Resource

POST /users/register - Register a new user.
POST /users/login - Authenticate a user.
GET /users/{userId} - Retrieve user details.
PUT /users/{userId} - Update user profile.
DELETE /users/{userId} - Delete user profile.
POST /users/{userId}/logout - Log out the user.
GET /users/{userId}/favorites - Get user’s favorite properties.
POST /users/{userId}/favorites - Add a property to user’s favorites.

Property Resource

POST /properties - Create a new property listing.
GET /properties - Get a list of all properties (supports filters).
GET /properties/{propertyId} - Get details of a specific property.
PUT /properties/{propertyId} - Update details of a property.
DELETE /properties/{propertyId} - Delete a property listing.
GET /properties/{propertyId}/amenities - Retrieve amenities for a property.
POST /properties/{propertyId}/amenities - Add amenities to a property.

Listing Resource

POST /listings - Create a new listing for a property.
GET /listings - Retrieve a list of all listings with filters.
GET /listings/{listingId} - Get details of a specific listing.
PUT /listings/{listingId} - Update listing details.
DELETE /listings/{listingId} - Remove a listing.
POST /listings/{listingId}/feature - Mark a listing as featured.

Search Resource

GET /search - Search for properties with optional filters like city, state, type, minPrice, and maxPrice.
Inquiry Resource
POST /inquiries - Create a new inquiry for a listing.
GET /inquiries/{inquiryId} - Retrieve details of a specific inquiry.
PUT /inquiries/{inquiryId} - Update an inquiry.
DELETE /inquiries/{inquiryId} - Delete an inquiry.
POST /inquiries/{inquiryId}/response - Respond to an inquiry.

Transaction Resource

POST /transactions - Create a transaction for buying or renting a property.
GET /transactions/{transactionId} - Retrieve details of a specific transaction.
PUT /transactions/{transactionId}/cancel - Cancel a transaction.
GET /users/{userId}/transactions - Retrieve a list of user’s transactions.

Document Resource

POST /properties/{propertyId}/documents - Upload a document for a property.
GET /properties/{propertyId}/documents - Get all documents for a property.
GET /documents/{documentId} - Get details of a specific document.
DELETE /documents/{documentId} - Delete a document.

Review Resource

POST /properties/{propertyId}/reviews - Add a review for a property.
GET /properties/{propertyId}/reviews - Get all reviews for a property.
DELETE /reviews/{reviewId} - Delete a review.

Payment Service

POST /payments/process - Process a payment for a transaction.
POST /payments/refund/{transactionId} - Refund a payment for a transaction.

### Mermaid Code:

```mermaid
---
title: Real Estate Management System Model
---
classDiagram

    class User{
        +String userId
        +String username
        +String email
        +String password
        +register()
        +login()
        +updateProfile()
    }

    class Property{
        +String postId
        +String title
        +String description
        +double price
        +String location
        +String propertyType
        +postProperty()
        +updateProperty()
        +removeProperty()
    }

    class Listing{
        +String listingId
        +User owner
        +Property property
        +LocalDateTime createdDate
        +List~Inquiry~ inquiries
        +addInquiry()
        +updateListing()
        +removeListing()
    }

    class Transaction{
        +String transactionId
        +User buyer
        +Property property
        +String transactionType
        +LocalDateTime transactionDate
        +double amount
        +createTransaction()
        +cancelTransaction()
    }

    class Inquiry{
        +String inquiryId
        +User user
        +Listing listing
        +String message
        +LocalDateTime inquiryDate
        +createInquiry()
        +updateInquiry()
        +deleteInquiry()
    }

    class PropertyType{
        <<enumeration>>
        RENT,
        SALE
    }

    class TransactionType{
        <<enumeration>>
        BUY,
        RENT
    }

    class SearchService{
        +searchProperties(location, priceRange, propertyType)
    }

    class AuthService{
        +login(email, password)
        +register(username, email, password)
    }

    class PaymentService{
        +processPayment(userId, amount)
        +refundPayment(transactionId)
    }

    %% Relationships
    User "1" --> "0..*" Listing : creates
    Listing "1" --> "1" Property : represents
    Listing "0..*" --> "0..*" Inquiry : receives
    Transaction "1" --> "1" Property : involved in
    Transaction "1" --> "1" User : involves
    Inquiry "1" --> "1" Listing : on
    Inquiry "1" --> "1" User : made by

    %% Utility Relationships
    User --> AuthService : uses
    Listing --> SearchService : uses for discovery
    Transaction --> PaymentService : handles

    %% Enums
    Property --> PropertyType
    Transaction --> TransactionType

