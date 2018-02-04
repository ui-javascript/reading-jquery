package space.qmen.lot.controller;

import space.qmen.lot.domain.Renter;
import space.qmen.lot.service.RenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Luo_0412 on 2017/5/4.
 */
@RestController
public class RenterRestController {
    @Autowired
    private RenterService renterService;

    @RequestMapping(value = "/api/renter/{id}", method = RequestMethod.GET)
    public Renter findOneRenter(@PathVariable("id") Long id) {
        return renterService.findRenterById(id);
    }

    @RequestMapping(value = "/api/renter", method = RequestMethod.GET)
    public List<Renter> findAllRenter() {
        return renterService.findAllRenter();
    }

    @RequestMapping(value = "/api/renter", method = RequestMethod.POST)
    public void createRenter(@RequestBody Renter renter) {
        renterService.saveRenter(renter);
    }

    @RequestMapping(value = "/api/renter", method = RequestMethod.PUT)
    public void modifyRenter(@RequestBody Renter renter) {
        renterService.updateRenter(renter);
    }

    @RequestMapping(value = "/api/renter/{id}", method = RequestMethod.DELETE)
    public void modifyRenter(@PathVariable("id") Long id) {
        renterService.deleteRenter(id);
    }
}
