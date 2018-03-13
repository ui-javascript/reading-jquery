package space.qmen.lot.controller;

import space.qmen.lot.domain.Owner;
import space.qmen.lot.service.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Luo_0412 on 2017/5/4.
 */
@RestController
public class OwnerRestController {
    @Autowired
    private OwnerService ownerService;

    @RequestMapping(value = "/api/owner/{id}", method = RequestMethod.GET)
    public Owner findOneOwner(@PathVariable("id") Long id) {
        return ownerService.findOwnerById(id);
    }

    @RequestMapping(value = "/api/owner", method = RequestMethod.GET)
    public List<Owner> findAllOwner() {
        return ownerService.findAllOwner();
    }

    @RequestMapping(value = "/api/owner", method = RequestMethod.POST)
    public void createOwner(@RequestBody Owner owner) {
        ownerService.saveOwner(owner);
    }

    @RequestMapping(value = "/api/owner", method = RequestMethod.PUT)
    public void modifyOwner(@RequestBody Owner owner) {
        ownerService.updateOwner(owner);
    }

    @RequestMapping(value = "/api/owner/{id}", method = RequestMethod.DELETE)
    public void modifyOwner(@PathVariable("id") Long id) {
        ownerService.deleteOwner(id);
    }
}
