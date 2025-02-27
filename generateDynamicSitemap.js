"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
// In generateDynamicSitemap.ts
var fs_1 = require("fs");
var path_1 = require("path");
var sitemap_1 = require("sitemap");
var services_1 = require("./src/data/services");
var mainHostname = "https://growthgutexperts.com";
var subdomains = {
    drSushovan: "https://drsushovan.growthgutexperts.com",
    drMoumita: "https://drmoumita.growthgutexperts.com"
};
// Function to get image URLs from public/images folder
function getImageUrls() {
    var imagesDir = (0, path_1.join)(process.cwd(), 'public', 'images');
    var images = (0, fs_1.readdirSync)(imagesDir);
    return images.map(function (image) { return "".concat(mainHostname, "/images/").concat(image); });
}
// Routes for the main site
function getMainSiteRoutes() {
    return [
        '/',
    ];
}
// Routes for doctor portfolios based on DoctorPortfolio.tsx
function getDoctorPortfolioRoutes() {
    return [
        '/',
        '/services',
        '/blogs',
        '/contact',
        '/about' // About
    ];
}
// Extract all service and subservice slugs from the doctorsServices data
function getAllServiceRoutes() {
    var serviceRoutes = [];
    // Process each doctor's services
    services_1.doctorsServices.forEach(function (doctor) {
        // Process main services
        doctor.services.forEach(function (service) {
            if (service.slug) {
                serviceRoutes.push("/services/".concat(service.slug));
                // Process subservices
                service.subServices.forEach(function (subService) {
                    if (subService.slug) {
                        serviceRoutes.push("/services/".concat(subService.slug));
                    }
                });
            }
        });
    });
    // Return unique service routes
    return Array.from(new Set(serviceRoutes));
}
function generateSitemap() {
    return __awaiter(this, void 0, void 0, function () {
        var mainSiteRoutes, doctorRoutes_1, serviceRoutes_1, imageUrls, stream_1, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    mainSiteRoutes = getMainSiteRoutes();
                    doctorRoutes_1 = getDoctorPortfolioRoutes();
                    serviceRoutes_1 = getAllServiceRoutes();
                    imageUrls = getImageUrls();
                    stream_1 = new sitemap_1.SitemapStream({ hostname: mainHostname });
                    // Add routes for main site
                    mainSiteRoutes.forEach(function (route) {
                        stream_1.write({ url: route, changefreq: 'weekly', priority: 0.7 });
                    });
                    // Add service routes to main site
                    serviceRoutes_1.forEach(function (route) {
                        stream_1.write({ url: route, changefreq: 'weekly', priority: 0.6 });
                    });
                    // Add image gallery routes
                    stream_1.write({
                        url: '/images',
                        changefreq: 'monthly',
                        priority: 0.5,
                        img: imageUrls.map(function (url) { return ({
                            url: url,
                            caption: 'Image from our gallery',
                            title: url.split('/').pop()
                        }); })
                    });
                    stream_1.write({
                        url: '/gallery',
                        changefreq: 'monthly',
                        priority: 0.5,
                        img: imageUrls.map(function (url) { return ({ url: url }); })
                    });
                    // Add subdomain routes for each doctor
                    Object.entries(subdomains).forEach(function (_a) {
                        var doctorKey = _a[0], subdomainUrl = _a[1];
                        // Base routes for doctor portfolio
                        doctorRoutes_1.forEach(function (route) {
                            stream_1.write({
                                url: "".concat(subdomainUrl).concat(route),
                                changefreq: 'weekly',
                                priority: 0.7
                            });
                        });
                        // Service routes for doctor subdomain
                        // Filter service routes for the specific doctor
                        var doctorSpecificServices = serviceRoutes_1.filter(function (route) {
                            var slug = route.replace('/services/', '');
                            // Check if this service belongs to the current doctor
                            return services_1.doctorsServices.some(function (docData) {
                                return docData.sub.toLowerCase() === doctorKey.toLowerCase() && docData.services.some(function (service) {
                                    return service.slug === slug || service.subServices.some(function (subService) { return subService.slug === slug; });
                                });
                            });
                        });
                        doctorSpecificServices.forEach(function (route) {
                            stream_1.write({
                                url: "".concat(subdomainUrl).concat(route),
                                changefreq: 'weekly',
                                priority: 0.6
                            });
                        });
                    });
                    stream_1.end();
                    return [4 /*yield*/, (0, sitemap_1.streamToPromise)(stream_1)];
                case 1:
                    data = _a.sent();
                    (0, fs_1.writeFileSync)('./public/sitemap.xml', data.toString());
                    console.log('Sitemap with main domain and doctor subdomains generated successfully.');
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error('Error generating sitemap:', error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
generateSitemap();
