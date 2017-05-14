using System.Collections.Generic;
using System.Threading.Tasks;

namespace TheWorld.Models
{
    public interface IWorldRepository
    {
        IEnumerable<Trip> GetAllTrips();
        IEnumerable<Trip> GetTripsByUsername(string identityName);
        Trip GetTripByName(string tripName);
        Trip GetUserTripByName(string tripName, string identityName);

        void AddTrip(Trip trip);
        void AddStop(string tripName, Stop newStop, string identityName);

        Task<bool> SaveChangesAsync();
    }
}