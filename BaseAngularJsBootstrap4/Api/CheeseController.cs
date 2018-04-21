using System.Collections.Generic;
using System.Web.Http;
using RefAngularJsWebApiEntityFramework.ApiModels;

namespace RefAngularJsWebApiEntityFramework.Api
{
    public class CheeseController : ApiController
    {
        // GET: api/Cheese
        public IEnumerable<Cheese> Get()
        {
            return new []
            {
                new Cheese { Name = "Gouda", Texture = "compact, crumbly, dense, springy"},
                new Cheese { Name = "Pecorino", Texture = "crumbly, dense, flaky, grainy"},
                new Cheese { Name = "Halloumi", Texture = "chewy, creamy, firm, springy"},
            };
        }

        // GET: api/Cheese/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Cheese
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Cheese/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Cheese/5
        public void Delete(int id)
        {
        }
    }
}
